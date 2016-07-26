const gulp = require("gulp");
const rename = require("gulp-rename");
const ts = require('gulp-typescript');
const browserSync = require('browser-sync').create();
const watch = require("gulp-watch");
const merge = require("merge-stream");
const sourcemaps = require("gulp-sourcemaps");

const config = require("./config");
 
const tsProject = ts.createProject('tsconfig.json', { 
  rootDir: config.ts.source
});

const tsBuildProject = ts.createProject("tsconfig.json", { typescript: require("typescript") });

gulp.task("build", function(){

  var tsResult = tsBuildProject.src() // instead of gulp.src(...) 
        .pipe(ts(tsBuildProject));

    return tsResult.js
		.pipe(rename({ dirname: '' }))
		.pipe(gulp.dest(config.samples.dest));
});

gulp.task('compile', function () {
  
    var tsResult = gulp.src(config.ts.files)
    .pipe(sourcemaps.init())
		.pipe(ts(tsProject));


    return merge([
      tsResult.js        
        .pipe(rename({ dirname: '' }))
        .pipe(sourcemaps.write('.'))        
        .pipe(gulp.dest(config.ts.dest)),
      tsResult.dts
        .pipe(rename({ dirname: '' }))
        .pipe(gulp.dest(config.ts.dest))
    ]);
});