var gulp = require('gulp');
	webserver = require('gulp-webserver');


config = {
	pathServer: {
		app: './app/',
		dist: './dis',
	}
};

//server for develop
gulp.task('server', function() {
  gulp.src(config.pathServer.app)
    .pipe(webserver({
      host: 'localhost',
      port: 9090,
      livereload: true,
      open: true
    }));
});


