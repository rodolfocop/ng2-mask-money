const gulp = require("gulp");
const rename = require("gulp-rename");
const shell = require("gulp-shell");
const sequence = require("run-sequence");
const argv = require('yargs').argv;
const merge = require("merge-stream");
const del = require("del");
const config = require("./config");
const publishBase = config.package.dest;
const jeditor = require("gulp-json-editor");

gulp.task("package:clean", function () {
	return del([publishBase, config.ts.dest]);
});

gulp.task("package:copy", function () {

	var items = config.package.source.map(item => {

		if (item instanceof Array) return item;
		if (/(.*?)\.[a-zA-Z0-9]{2,5}$/g.exec(item)) return [item, item];
		return item;
	});

	var stream = merge();

	items.forEach(function (element) {

		if (element instanceof Array) {
			stream.add(
				gulp.src(element[0])
					.pipe(rename(element[1]))
					.pipe(gulp.dest(publishBase))
			);
		} else {
			stream.add(
				gulp.src(element)
					.pipe(gulp.dest(publishBase))
			);
		}

	}, this);


	return stream;

});

gulp.task("package:copyts", function () {

	return gulp.src(config.package.tsSource)
		.pipe(gulp.dest(config.package.tsDest));

});


gulp.task("package:package.json", function () {

	return gulp.src(publishBase + "/package.json")
		.pipe(jeditor(function (package) {

			if (argv["env-version"] && argv["env-version"] != "stable") {
				package.version += "-" + argv["env-version"];
			}

			return package;
		}))
		.pipe(gulp.dest(publishBase));

});

gulp.task("package", function (cb) {
	sequence(
		"package:clean",
		"compile",
		"package:copyts",
		"package:copy",
		"package:package.json",
		cb
	);
});

gulp.task("publish", ["package"], function (cb) {

	var tag = "";

	if (argv["env-version"] && argv["env-version"] != "stable") {
		tag = "--tag=" + argv["env-version"];
	}

	return gulp.src(`${publishBase}/package.json`, { read: false })
		.pipe(shell([
			`cd ./${config.package.dest} && npm publish --access=public ${tag}`
		]));

}); 