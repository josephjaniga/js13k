'use strict';

// try this - SOURCE MAPS
// http://stackoverflow.com/questions/28087674/gulp-browserify-6to5-source-maps


var babelify    = require('babelify'),
    browserify  = require('browserify'),
    uglifyify   = require('uglifyify'),
    del         = require('del'),
    gulp        = require('gulp'),
    minify      = require('gulp-minify'),
    minifyHTML  = require('gulp-minify-html'),
    size        = require('gulp-size'),
    watch       = require('gulp-watch'),
    zip         = require('gulp-zip'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    uglify      = require('gulp-uglify'),

    // the filepath setup
    _DATESTAMP_     = Date.now(),
    CORE_SOURCE     = ['core/**/*.js', '!core/core.es5.min.js'],
    CORE_DEST       = 'build/core/',
    DEV_CORE_DEST   = 'core/',
    INDEX_SOURCE    = 'index.html',
    INDEX_DEST      = 'build/',
    ZIP_SOURCE      = ['./build/**','./build/**/*','./build/**/*.*','build/**', 'build/', '!build/core/core.es5.js'],
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
    //del(["core/core.es5*"]);
    var bundler = browserify({
            debug: false
        })

    bundler.add("./core/Main.js")
        .transform(babelify, {});

    bundler.bundle()
        .pipe(source('core.es5.js'))
        //.pipe(gulp.dest(CORE_DEST))
        .pipe(gulp.dest(DEV_CORE_DEST));

    return bundler.bundle()
        .pipe(source('core.es5.min.js'))
        .pipe(buffer())
        //.pipe(minify({
        //    ignoreFiles: ['min.js']
        //}))
        .pipe(uglify({
            //mangle: true,
            //output: {},
            //compress: {}
        }))
        //.pipe(gulp.dest(CORE_DEST))
        .pipe(gulp.dest(DEV_CORE_DEST));
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