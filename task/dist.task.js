const gulp = require("gulp");
const rename = require("gulp-rename");
const sequence = require("run-sequence");
const del = require("del");
const concat = require("gulp-concat");
const Builder = require('systemjs-builder');
const config = require("./config");
const sourcemaps = require("gulp-sourcemaps");
const replace = require("gulp-replace");


gulp.task('dist:clean-all', function (cb) {
	return del(config.dist.clean, cb);
});

gulp.task('dist:bundle', function () {

    var bundle = config.dist.bundle.js;

	gulp.src(bundle)
		.pipe(sourcemaps.init())
		.pipe(concat(config.dist.bundle.output + ".js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dist.path));


});

gulp.task('dist:html', function () {

	return gulp.src(config.dist.index)
		.pipe(replace(/<script +src="(.*?)"> *<\/script>/g, '<!-- js: $1 -->'))
		.pipe(replace(/<link.*?href="(.*?)".*>/g, '<!-- css: $1 -->')) 
		.pipe(replace(/<script>\/\*bundle\*\/<\/script>/g, `
			<link rel="stylesheet" href="${config.dist.bundle.output}.css">
			<script src="${config.dist.bundle.output}.js"></script>
			<script src="${config.dist.output}.js"></script>
		`))
		.pipe(gulp.dest(config.dist.path));

});

gulp.task('dist:copyjs', function () {

	return gulp.src(config.dist.src + "/**/*.js")
		.pipe(replace(/"\.\.\/\.\.\/src\/index/g, '"./index'))
		.pipe(gulp.dest(config.dist.path));

});

gulp.task('dist:copycss', function () {

	const css = config.dist.bundle.css;

	return gulp.src(css)
		.pipe(sourcemaps.init())
		.pipe(concat(config.dist.bundle.output + ".css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.dist.path));

});

gulp.task('dist:build', function (cb) {

	var builder = new Builder('./');

    builder.config(config.dist.systemjs.config);



    builder.bundle(config.dist.systemjs.in,
        config.dist.systemjs.out)
		.then(function () {
			cb();
		})
		.catch(function (ex) {
			console.log(ex);
			cb(new Error(ex));
		});
});

gulp.task('dist', ['dist:clean-all'], function (cb) {

	sequence(['build', 'dist:html', 'dist:bundle'], ['dist:copycss', 'dist:copyjs'], 'dist:build', cb);

});