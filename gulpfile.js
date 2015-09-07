var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var watchify = require('watchify');
var sass = require('gulp-sass');


gulp.task('modules', function() {
    browserify({
    entries: 'js/butterfly.js',
    debug: true
    })
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./public/dist'));
});


gulp.task("watch", function () {
  gulp.watch("js/**/*.js", ["modules"]);
  gulp.watch('stylesheets/**/*.scss',['styles']);

});


gulp.task('styles', function() {
    gulp.src('stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
});
