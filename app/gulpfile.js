var gulp = require('gulp');
var typescript = require('gulp-typescript');
var gulpTypings = require("gulp-typings");
var bs = require('browser-sync');

var tsConfig =  {
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        sourceMap: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        removeComments: false,
        noImplicitAny: false,
        typeRoots: [
          "../node_modules/@types"
        ],
        types: [
          "core-js"
        ]
    };

gulp.task('installTypings', function () {
    return gulp.src("./typings.json")
        .pipe(gulpTypings());
});

gulp.task('typescript', function () {
    return gulp.src('src/**/*.ts')
        .pipe(typescript(tsConfig))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['typescript'], function () {
    bs.init({
        server: {
            baseDir: '../',
            index: 'app/index.html'
        }
    });

    gulp.watch('index.html', bs.reload);
    gulp.watch('styles/*.css', bs.reload);
    gulp.watch('src/**/*.js', bs.reload);
    gulp.watch('src/**/*.ts', ['typescript', bs.reload]);
});
