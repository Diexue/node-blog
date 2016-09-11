var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tscConfig = require('./tsconfig.json');

var appSrc = 'builds/development/',
    tsSrc = 'process/typescript/';

gulp.task('html', function () {
    'use strict';
    gulp.src(appSrc + '**/*.html');
});

gulp.task('css', function () {
    'use strict';
    gulp.src(appSrc + '**/*.css');
});

gulp.task('copylibs', function () {
    'use strict';
    return gulp
        .src([
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js'
        ])
        .pipe(gulp.dest(appSrc + 'js/lib/angular2'));
});

gulp.task('typescript', function () {
    'use strict';
    return gulp
        .src(tsSrc + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function () {
    'use strict';
    gulp.watch(tsSrc + '**/*.ts', ['typescript']);
    gulp.watch(appSrc + 'css/*.css', ['css']);
    gulp.watch(appSrc + '**/*.html', ['html']);
});

gulp.task('webserver', function () {
    'use strict';
    gulp.src(appSrc)
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['copylibs', 'typescript', 'watch', 'webserver']);
