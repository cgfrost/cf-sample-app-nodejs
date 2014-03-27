var gulp = require('gulp');

// include plug-ins

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');


gulp.task('default', ['clean', 'jshint'], function () {
});

gulp.task('test', function(){

});

gulp.task('jshint', function () {
	gulp.src(['./server.js', './lib/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});


gulp.task('clean', function () {
	gulp.src('./target', {read: false})
		.pipe(clean());
});