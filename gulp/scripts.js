var gulp = require('gulp');
var config = require('./config.json');
var sourcemaps = require("gulp-sourcemaps");
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');


gulp.task('scripts', [ 'scripts-global' ]);


gulp.task('scripts-global', function() {
    var stream = gulp.src( [config.scripts.src_vendor_global, config.scripts.src_global ] )
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(concat( config.scripts.filename_app ))
        // .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest( config.scripts.dest ));
    return stream;
});
