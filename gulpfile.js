var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var watchify = require('watchify');


// gulp.task("default", function () {
//   return gulp.src("*.js")
//     .pipe(babel())
//     .pipe(gulp.dest("dist"));
// });
//
// gulp.task("watch", function(){
//     gulp.watch('src/**/*.js', ['default', 'modules'])
// });

gulp.task('modules', function() {
    browserify({
    entries: 'js/main.js',  // I assume entries is like src([]) in normal gulp
    debug: true
    })
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('browserifyWatch', function(){
  browserifyShare();
});

gulp.task("watch", function () {
  gulp.watch("js/**/*.js", ["modules"]);

})

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


gulp.task('styles', function() {
    gulp.src('public/stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
});

gulp.task('watchStyles',function() {
    gulp.watch('public/**/*.scss',['styles']);


});


//
//
// 'use strict';
//
// var watchify = require('watchify');
// var browserify = require('browserify');
// var gulp = require('gulp');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var gutil = require('gulp-util');
// var sourcemaps = require('gulp-sourcemaps');
// var assign = require('lodash.assign');

// // add custom browserify options here
// var customOpts = {
//   entries: ['./src/index.js'],
//   debug: true
// };
// var opts = assign({}, watchify.args, customOpts);
// var b = watchify(browserify(opts));
//
// // add transformations here
// // i.e. b.transform(coffeeify);
//
// gulp.task('js', bundle); // so you can run `gulp js` to build the file
// b.on('update', bundle); // on any dep update, runs the bundler
// b.on('log', gutil.log); // output build logs to terminal
//
// function bundle() {
//   return b.bundle()
//     // log errors if they happen
//     .on('error', gutil.log.bind(gutil, 'Browserify Error'))
//     .pipe(source('bundle.js'))
//     // optional, remove if you don't need to buffer file contents
//     .pipe(buffer())
//     // optional, remove if you dont want sourcemaps
//     .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
//        // Add transformation tasks to the pipeline here.
//     .pipe(sourcemaps.write('./')) // writes .map file
//     .pipe(gulp.dest('./dist'));
// }
