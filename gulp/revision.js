var gulp = require('gulp');
var config = require('./config.json');
var rev = require('gulp-rev');
var del = require('rev-del');
var path = require('path');

gulp.task('revision', ['styles', 'scripts', 'fonts', 'images', 'svg'], function() {
    return gulp.src([
        config.styles.dest + '/*.css',
        config.scripts.dest + '/*.js',
        config.fonts.dest + '/**/*.*',
        config.images.dest + '/**/*.*',
        config.svg.dest + '/**/*.*',
    ], {base: path.join(process.cwd(), config.src_static )})
    .pipe(rev())
    .pipe(gulp.dest(config.hugo_static))
    .pipe(rev.manifest())
    .pipe(del({dest: config.hugo_static}))
    .pipe(gulp.dest(config.hugo_static));
});
