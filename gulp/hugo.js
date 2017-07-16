var gulp = require('gulp');
var exec = require('child_process').execSync;
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');

function hugo(drafts) {
    var src = path.join(process.cwd(), 'hugo');
    var dst = path.join(process.cwd(), 'public');

    gutil.log('src: ' + src + ' dst: ' + dst);

    var cmd = 'hugo --config=hugo/config.toml -s ' + src + ' -d ' + dst;
    if (drafts) {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
    }

    try {
        var result = exec(cmd, {encoding: 'utf-8'});
        gutil.log('hugo: \n' + result);
    } catch (err) {
        gutil.log('hugo: \n' + err.stdout);
    }

}

gulp.task('hugo:draft', function() {
    hugo(true);
});

gulp.task('hugo:all', ['hugo:delete'], function() {
    hugo(true);
});

gulp.task('hugo:delete', ['revision'], function() {
    var dst1 = path.join(process.cwd(), 'public');
    var dst2 = path.join(process.cwd(), 'hugo', 'public');
    del.sync(dst1);
    del.sync(dst2);
});

gulp.task('hugo:live', ['hugo:delete'], function() {
    hugo(false);
});
