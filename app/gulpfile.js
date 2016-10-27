var gulp = require('gulp');
var typescript = require('gulp-typescript');
var bs = require('browser-sync');

gulp.task('typescript', function () {
    return gulp.src('src/**/*.ts')
        .pipe(typescript({
            outDir: './build',
            noImplicitAny: true
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('save', function () {
    gulp.watch('index.html', bs.reload);
    gulp.watch('./styles/**/*.css', bs.reload);
    gulp.watch('./src/**/*.js', bs.reload);
    gulp.watch('./src/**/*.ts', ['typescript', bs.reload]);
});

gulp.task('default', ['save'], function () {
    bs.init({
        server: {
            baseDir: '',
            index: 'index.html'
        }
    });
});