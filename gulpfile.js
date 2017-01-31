var gulp = require('gulp');
var eslint = require('gulp-eslint');
var nodemon = require('gulp-nodemon');

gulp.task('lint', function() {
    return gulp.src(['*.js', './routes/*.js', './models/*.js', './config/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('nodemon', function() {
    var stream = nodemon({
        script: 'start.js',
        ext: 'html js',
        verbose: true,
        tasks: ['lint']
    });

    stream
        .on('restart', function() {
            console.log('restarted!')
        })
        .on('crash', function() {
            console.error('Application has crashed!\n');
            stream.emit('restart', 10);
        });
});