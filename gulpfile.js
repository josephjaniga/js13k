'use strict';

var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    minifyHTML  = require('gulp-minify-html'),
    zip         = require('gulp-zip'),
    del         = require('del'),
    babel       = require('gulp-babel'),
    concat      = require('gulp-concat'),
    //env         = require('gulp-env'),
    watch       = require('gulp-watch'),
    size        = require('gulp-size'),
    notify      = require('gulp-notify'),

    // the filepath setup
    _DATESTAMP_     = Date.now(),
    CORE_SOURCE     = ['core/*.js'],
    CORE_DEST       = 'build/core/',
    DEV_CORE_DEST   = 'core',
    INDEX_SOURCE    = 'index.html',
    INDEX_DEST      = 'build/',
    ZIP_SOURCE      = ['build/'],
    ZIP_DEST        = 'zip/';

//gulp.task('set-env', function(){
//    env({"file": ".env.json"});
//    console.log(process.env.environment);
//});

gulp.task('default', ['buildCompressed']);

/**
 * BUILD DEVELOPMENT
 * WATCH TASK
 */
gulp.task('watch', function(){
    var TOTAL_SOURCE = [CORE_SOURCE[0], '!core/core.es5.min.js'];
    watch(TOTAL_SOURCE, function(){
        del(["core/core.es5.min.js"]);
        return gulp.src(TOTAL_SOURCE)
            .pipe(babel())
            .pipe(concat('core.es5.min.js'))
            //.pipe(uglify())
            .pipe(gulp.dest(DEV_CORE_DEST));
    });
});

/**
 * BUILD PRODUCTION
 *  load environmental variables
 *  concatenate
 *  transpile ES6
 *  uglify - min.js
 *  minifyHTML
 */
gulp.task('buildCompressed', ['clean', 'buildCore', 'buildIndex', 'zip', 'zipSize']);

gulp.task('clean', ['cleanZips', 'cleanBuild']);

gulp.task('cleanZips', function(cb){
    del(['zip/*.zip'], cb);
});

gulp.task('cleanBuild', function(cb){
    del(['build/*'], cb);
});

gulp.task('buildIndex', ['clean'], function(cb) {
    return gulp.src(INDEX_SOURCE)
        .pipe(minifyHTML({conditionals:true, spare:true}))
        .pipe(gulp.dest(INDEX_DEST));
});

gulp.task('buildCore', ['clean'], function(cb) {
    return gulp.src(CORE_SOURCE)
        .pipe(babel())
        .pipe(concat('core.es5.min.js'))
        .pipe(gulp.dest(DEV_CORE_DEST))
        .pipe(uglify())
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