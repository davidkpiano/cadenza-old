var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var markdown = require('gulp-markdown');
var highlight = require('gulp-highlight');

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
    gulp.src('docs/source/*.md')
        .pipe(markdown())
        .pipe(highlight())
        .pipe(gulp.dest('docs/build'));
});

// Default Task
gulp.task('default', ['build'], function() {
	gulp.watch('./scss/**/*.scss', ['scss']);

    gulp.watch('./docs/source/*.md', ['docs']);
});