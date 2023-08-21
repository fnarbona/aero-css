const { src, dest, watch, series } = require('gulp');
const sassCompiler = require('sass');
const sass = require('gulp-sass')(sassCompiler);

function buildStyles() {
	return src('aero/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
	watch(['aero/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
