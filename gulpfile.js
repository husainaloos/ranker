const gulp = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');
const chalk = require('chalk');

gulp.task('lint', function() {
    return gulp.src(['*.js', './routes/*.js', './models/*.js', './config/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('nodemon', function() {
    const stream = nodemon({
        script: 'start.js',
        ext: 'html js',
        verbose: true,
        tasks: ['lint'],
    });

    stream
        .on('restart', function() {
            chalk.yellow('Restarting...');
        })
        .on('crash', function() {
            chalk.yellow('Crashed. Restarting in few seconds...');
            stream.emit('restart', 10);
        });
});
