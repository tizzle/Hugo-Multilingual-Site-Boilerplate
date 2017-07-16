var gulp = require("gulp");
var php = require('gulp-connect-php');

gulp.task('php', function() {
    php.server({ 
        base: './public/api/',
        port: 8010,
        keepalive: true
    });
});
