'use strict';

var babelify    = require('babelify'),
    browserify  = require('browserify'),
    del         = require('del'),
    gulp        = require('gulp'),
    babel       = require('gulp-babel'),
    concat      = require('gulp-concat'),
    minifyHTML  = require('gulp-minify-html'),
    size        = require('gulp-size'),
    uglify      = require('gulp-uglify'),
    watch       = require('gulp-watch'),
    zip         = require('gulp-zip'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),

    // the filepath setup
    _DATESTAMP_     = Date.now(),
    CORE_SOURCE     = ['core/**/*.js', '!core/core.es5.min.js'],
    CORE_DEST       = 'build/core/',
    DEV_CORE_DEST   = 'core/',
    INDEX_SOURCE    = 'index.html',
    INDEX_DEST      = 'build/',
    ZIP_SOURCE      = ['./build/**','./build/**/*','./build/**/*.*','build/**', 'build/'],
    ZIP_DEST        = 'zip/';


gulp.task('watch', function() {
    gulp.watch('./core/**/*', ['buildCompressed']);
    gulp.watch('./index.html', ['buildCompressed']);
});

gulp.task('default', ['buildCompressed']);

/**
 * BUILD PRODUCTION
 *  load environmental variables
 *  concatenate
 *  transpile ES6
 *  uglify - min.js
 *  minifyHTML
 */

gulp.task('buildCompressed', ['clean', 'buildIndex', 'buildCore', 'zip', 'zipSize']);

gulp.task('clean', ['cleanZips', 'cleanBuild']);

gulp.task('cleanZips', function(cb){
    del(['zip/*.zip'], cb);
});

gulp.task('cleanBuild', function(cb){
    del(['build/*'], cb);
});

gulp.task('buildIndex', function() {
    return gulp.src(INDEX_SOURCE)
        .pipe(minifyHTML({conditionals:true, spare:true}))
        .pipe(gulp.dest(INDEX_DEST));
});

gulp.task('buildCore', function() {
    del(["core/core.es5.min.js"]);
    return browserify({
            entries: "./core/Main.js",
            debug: false
        })
        .transform(babelify)
        .bundle()
        .pipe(source('core.es5.min.js'))
        .pipe(buffer())
        //.pipe(uglify(false))
        //.pipe(buffer())
        .pipe(gulp.dest(CORE_DEST));
});

gulp.task('zip', ['buildCore', 'buildIndex'], function() {
    return gulp.src(ZIP_SOURCE)
        .pipe(zip('build_'+_DATESTAMP_+'.zip'))
        .pipe(gulp.dest(ZIP_DEST));
});

gulp.task('zipSize', ['zip'],  function(){
    return gulp.src('zip/build_'+_DATESTAMP_+'.zip')
        .pipe(size({showFiles:true, pretty: true}));
});

gulp.task('test', function(){
    browserify({
        entries: "./core/Main.js",
        debug: false
    })
    .transform(babelify)
    .bundle()
    .pipe(source('core.es5.min.js'))
    .pipe(gulp.dest('./build/core/'));
});