var gulp = require('gulp');
var config = require('./config.json');

gulp.task( 'fonts', function(){
    return gulp.src(config.fonts.src)
      .pipe(gulp.dest(config.fonts.dest));
});
