var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var watchify = require('watchify');
var sass = require('gulp-sass');


// gulp.task("default", function () {
//   return gulp.src("*.js")
//     .pipe(babel())
//     .pipe(gulp.dest("dist"));
// });
//

gulp.task('modules', function() {
    browserify({
    entries: 'js/main.js',  // I assume entries is like src([]) in normal gulp
    debug: true
    })
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('browserifyWatch', function(){
  browserifyShare();
});

gulp.task("watch", function () {
  gulp.watch("js/**/*.js", ["modules"]);

});


gulp.task('styles', function() {
    gulp.src('stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
});

gulp.task('watchStyles',function() {
    gulp.watch('stylesheets/**/*.scss',['styles']);


});

// 'use strict;'
//
// var config = require('../config');
// var gulp = require('gulp');
// var plumber = require('gulp-plumber');
// var glob = require('glob');
// var browserify  = require('browserify');
// var source = require('vinyl-source-stream');
//
// gulp.task('tests', function(){
//   var testFiles = glob.sync('./spec/**/*.js');
//   return browserify({
//       entries: testFiles,
//       extensions: ['.jsx']
//     })
//     .bundle({debug: true})
//     .pipe(source('app.js'))
//     .pipe(plumber())
//     .pipe(gulp.dest(config.dest.development));
// });



// var gulp = require('gulp'),
//    uglify = require('gulp-uglify'),
//    gutil = require('gulp-util'),
//    concat = require('gulp-concat'),
//    sass = require('gulp-sass');

// gulp.task('minify', function () {
//    gulp.src(['public/js/lib/jquery.js',
//       'public/js/lib/underscore.js',
//       'public/js/lib/backbone.js',
//       'public/js/mic.js',
//       'public/js/routers.js',
//       'public/js/models/*.js',
//       'public/js/collections/#.js',
//       'public/js/**/*.js', ])
//       .pipe(uglify().on('error', gutil.log))
//       .pipe(concat('app.js'))
//       .pipe(gulp.dest('public/build'))
//
// });
