var gulp = require('gulp');

// include plug-ins

var clean = require('gulp-clean');
var mocha = require('gulp-mocha');
var jslint = require('gulp-jslint');


gulp.task('default', ['clean', 'jshint', 'test'], function () {
});

gulp.task('test', function(){
    gulp.src('test/**/*.js')
        .pipe(mocha({
            reporter: 'spec'
        }))
        .on("error", function (err) {
            console.log(err.toString());
            this.emit('end');
        });
});

gulp.task('jshint', function () {
	gulp.src(['./server.js', './lib/*.js'])
		.pipe(jslint({
            nomen: true,
            white: true,
            errorsOnly: false
        }))
        .on("error", function (err) {
            console.log(err.toString());
            this.emit('end');
        });
});


gulp.task('clean', function () {
	gulp.src('./target', {read: false})
		.pipe(clean());
});
