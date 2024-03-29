var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var markdown = require('gulp-markdown');
var highlight = require('gulp-highlight');
var prompt = require('gulp-prompt');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');
var replace = require('gulp-replace');
var sassdoc = require('gulp-sassdoc');

// Non-gulp requires
var _ = require('lodash');
var fs = require('fs');
var marked = require('marked');
var renderer = new marked.Renderer();

gulp.task('build', ['scss', 'docs']);

gulp.task('scss', ['sassdoc'], function() {
    gulp.src('scss/*.scss')
        .pipe(sass({
            style: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 9']
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('sassdoc', function() {
    gulp.src('scss')
        .pipe(sassdoc({
            'dest': 'docs/scss',
            'verbose': true,
            'force': true
        }));
});

gulp.task('docs', function() {
    var docsDir = './docs/source/';

    var modules = getDirectories(docsDir);

    _.each(modules, function(module) {
        var moduleIndex = require(docsDir + module + '/index.json');
        var docOrder = moduleIndex.contents.map(function(docName) {
            return docsDir + module + '/' + docName + '.md';
        });

        gulp.src(docOrder)
            .pipe(markdown({
                renderer: renderer
            }))
            .pipe(replace(/\[\[([^\/].*?)\]\]/g, '<div class="cz-$1">\n'))
            .pipe(replace(/\[\[\/(.*?)\]\]/g, '</div>\n'))
            .pipe(wrap("<article>\n${ contents }</article>\n"))
            .pipe(concat(module + '.html'))
            .pipe(highlight())
            .pipe(gulp.dest('docs/build'));
    });

    function getDirectories(dir) {
        return fs.readdirSync(dir).filter(function(file) {
            return fs.statSync(dir + '/' + file).isDirectory();
        });
    }
});

renderer.paragraph = function(text) {
    if (/^\[.*\]$/.test(text)) return text;

    return '<p>' + text + '</p>\n';
};

gulp.task('component', function() {
    gulp.src('app.js')
        .pipe(prompt.prompt({
            type: 'input',
            name: 'component',
            message: 'Name of component?'
        }, function(res) {
            var baseDir = 'scss/modules/' + res.component + '/';

            fs.mkdir(baseDir, function(err) {
                if (err) return console.log(err);

                var moduleContent = "@import\n\t'_mixins',\n\t'_components',\n\t'_themes',\n\t'_exports';";

                fs.writeFileSync(baseDir + '_module.scss', moduleContent);
                fs.writeFileSync(baseDir + '_components.scss', '');
                fs.writeFileSync(baseDir + '_mixins.scss', '');
                fs.writeFileSync(baseDir + '_themes.scss', '');
                fs.writeFileSync(baseDir + '_exports.scss', '');

                console.log('Component ' + res.component + ' created.');
            });
        }));
});

// Default Task
gulp.task('default', ['build'], function() {
	gulp.watch('./scss/**/*.scss', ['scss']);

    gulp.watch('./docs/source/**/*', ['docs']);
});