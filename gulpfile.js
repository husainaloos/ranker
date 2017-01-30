var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');

gulp.task('lint', function() {
    return gulp.src(['*.js', './routes/*.js', './models/*.js', './config/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});