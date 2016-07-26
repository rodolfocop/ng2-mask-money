const gulp = require("gulp");
const del = require("del");

const config = require("./config");
 
gulp.task("clean", function(cb){
	return del([config.ts.dest, config.samples.dest], cb);
});