var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var markdown = require('gulp-markdown');
var highlight = require('gulp-highlight');
var prompt = require('gulp-prompt');
var concat = require('gulp-concat');

// Non-gulp requires
var _ = require('lodash');
var fs = require('fs');

gulp.task('build', ['scss']);

gulp.task('scss', function() {
    gulp.src('scss/cadenza.scss')
        .pipe(sass({
            style: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 9']
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('docs', function() {
    var docsDir = './docs/source/';
    var components = fs.readdirSync(docsDir).filter(function(file) {
        return fs.statSync(docsDir + file).isDirectory();
    });

    _.each(components, function(component) {    
        gulp.src(docsDir + component + '/*.html')
            .pipe(concat(component + '.html'))
            .pipe(highlight())
            .pipe(gulp.dest('docs/build'));
    });
});

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

    gulp.watch('./docs/source/*.md', ['docs']);
});