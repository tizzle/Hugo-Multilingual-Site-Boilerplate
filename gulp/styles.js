var gulp = require('gulp');
var config = require('./config.json');
var postcss = require('gulp-postcss');
var lost = require('lost');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglifycss');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', [ 'styles-sass' ]);

gulp.task('styles-sass', function(){
    var stream = gulp.src(config.styles.src_sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
        lost()
    ]))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(rename( config.styles.filename_sass ))
    .pipe(autoprefixer('last 2 version'))
    .pipe(cleancss({advanced:false}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.styles.dest));
    return stream;
});
