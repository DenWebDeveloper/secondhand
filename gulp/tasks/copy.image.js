'use strict';

module.exports = function () {
    $.gulp.task('main.image', function () {
        return $.gulp.src(['./source/images/**/*.*','!./source/images/**/*.svg'])
            .pipe($.gulp.dest($.config.root + '/assets/img'));
    });
};
