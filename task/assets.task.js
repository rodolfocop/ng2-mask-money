const gulp = require("gulp"); 

const config = require("./config");
 

gulp.task("assets:copy", ["clean"], function(cb){
	return gulp.src(config.assets.source).pipe(gulp.dest(config.assets.dest));
});