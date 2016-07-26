const gulp = require("gulp");
const rename = require("gulp-rename");
const sequence = require("run-sequence");
const ts = require('gulp-typescript');
const browserSync = require('browser-sync').create();
const watch = require("gulp-watch");

const config = require("./config");

const tsConfig = config.samples.tsConfig;

gulp.task("serve:sample", ["sample"], function(){
	
	browserSync.init({
        server: {
            baseDir: config.assets.dest,
			routes: {
				"/node_modules": "node_modules",
				"/src": "server"
			}
        }
    });

	watch(config.samples.base, function(){
		return gulp.run(["sample:simple", "build"], function(){
			browserSync.reload();
		});
	});


	watch(config.ts.source, function(){
		return gulp.run("build", function(){
			browserSync.reload();
		});
	});

});

gulp.task('sample:simple', ['assets:copy'], function () {
    var tsResult = gulp.src(config.samples.source("simple"))
		.pipe(ts(tsConfig));


    return tsResult.js
		.pipe(rename({ dirname: '' }))
		.pipe(gulp.dest(config.samples.dest));
});

gulp.task("sample", function(){
	sequence(
		"sample:simple", "build"
	);
});