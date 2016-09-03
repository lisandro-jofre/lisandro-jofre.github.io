// Dependencies.
var browserSync = require("browser-sync").create();
var cssmin      = require("gulp-cssmin");
var gulp        = require("gulp");
var jade        = require("gulp-jade");
var reset       = require("node-reset-scss");
var sass        = require("gulp-sass");
	
/**
 * Tasks
 */

gulp.task("index", function () {
    return gulp.src("./src/index.jade")
        .pipe(jade())
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});

gulp.task("styles", function () {
    return gulp.src("./src/styles.scss")
        .pipe(sass({
        	includePaths: reset.includePath
        }))
        .pipe(cssmin())
        .pipe(gulp.dest("./assets/"))
        .pipe(browserSync.stream());
});

gulp.task("build", ["index", "styles"]);

gulp.task("serve", ["build"], function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/index.jade", ["index"]);
    gulp.watch("./src/styles.scss", ["styles"]);
});
