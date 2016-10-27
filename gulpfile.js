var gulp = require('gulp');
var bs = require('browser-sync');

gulp.task('default', function () {
	bs.init({
		server: {
			baseDir: '',
			index: 'index.html'
		}
	});

	gulp.watch('./index.html', bs.reload);
});