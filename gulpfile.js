'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    zip = require('gulp-zip'),
    del = require('del'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),

    // the filepath setup
    _DATESTAMP_ = Date.now(),
    CORE_SOURCE = ['core/*.js'],
    CORE_DEST = 'build/'+_DATESTAMP_+'/core/',
    INDEX_SOURCE = 'index.html',
    INDEX_DEST = 'build/'+_DATESTAMP_+'/',
    ZIP_SOURCE = ['build/'+_DATESTAMP_+'/'],
    ZIP_DEST = 'zip/';

gulp.task('default', ['buildCompressed']);

/**
 * BUILD
 *  concatenate
 *  transpile ES6
 *  uglify - min.js
 *  minifyHTML
 */
gulp.task('buildCompressed', ['buildCore', 'buildIndex', 'zip'])

gulp.task('clean', ['cleanZips', 'cleanBuild']);

gulp.task('cleanZips', function(){
    del(['zip/*.zip']);
});

gulp.task('cleanBuild', function(){
    del(['build/*']);
});

gulp.task('buildIndex', function(cb) {
    return gulp.src(INDEX_SOURCE)
        .pipe(minifyHTML({conditionals:true, spare:true}))
        .pipe(gulp.dest(INDEX_DEST));
});

gulp.task('buildCore', function(cb) {
    return gulp.src(CORE_SOURCE)
        .pipe(babel())
        .pipe(concat('core.es5.js'))
        .pipe(uglify())
        .pipe(rename({extname:'.min.js'}))
        .pipe(gulp.dest(CORE_DEST));
});

/**
 * this is the zipped output of the build, content size to be measured for the compo under 13k
 */
gulp.task('zip', ['buildCore', 'buildIndex'], function(cb) {
    return gulp.src(ZIP_SOURCE)
        .pipe(zip('build_'+_DATESTAMP_+'.zip'))
        .pipe(gulp.dest(ZIP_DEST));
});