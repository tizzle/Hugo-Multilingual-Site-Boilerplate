var gulp = require('gulp');
var svgMin = require('gulp-svgmin');
var svgSprite = require('gulp-svg-sprites');
var config = require('./config.json');

var svgConfig = {
  preview: true,
  mode:'symbols',
}
// SVG optimization task
gulp.task('svg', function () {
	return gulp.src(config.svg.src)
		.pipe(svgMin())
		.pipe(svgSprite(svgConfig))
		.pipe(gulp.dest(config.src_static));
});
