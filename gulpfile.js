var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');


// Compile Compass Files
gulp.task('compass', function() {
	gulp.src('./scss/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: './css',
			sass: './scss'
		}))
		.pipe(gulp.dest('css'))
		.pipe(livereload())
		.pipe(notify({
			message: 'Finished compiling SCSS (Cadenza)'
		}));
});

// Default Task
gulp.task('default', function() {
	gulp.run('compass');

	gulp.watch('./scss/**/*.scss', function() {
		gulp.run('compass');
	});
});