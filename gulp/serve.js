var gulp = require("gulp");
var php = require('gulp-connect-php');
var browserSync = require("browser-sync");

gulp.task('serve', ['build:all'], function() {
  browserSync.init({
      server: {
          baseDir: "./public/"
      },
      open: false
  });

  gulp.watch(['hugo/config.toml', 'hugo/layouts/**/*', 'hugo/content/**/*', 'hugo/archetypes/**/*', 'hugo/themes/**/layouts/**/*'], ['build:all']);
  gulp.watch(['src/styles/**/*.scss', 'src/scripts/**/*.js', 'src/img/**/*.*', 'src/svg/**/*.svg'], ['build:all']);
});
