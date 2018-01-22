const browserSync = require("browser-sync").create();
const concat      = require("gulp-concat");
const cssmin      = require("gulp-cssmin");
const del         = require("del");
const gulp        = require("gulp");
const gulpif      = require("gulp-if");
const ngHtml2Js   = require("gulp-ng-html2js");
const ngAnnotate  = require("gulp-ng-annotate");
const pug         = require("gulp-pug");
const rename      = require("gulp-rename");
const runSequence = require("run-sequence");
const sass        = require("gulp-sass");
const uglify      = require("gulp-uglify");
const useref      = require("gulp-useref");

const srcDir      = "./src";
const buildDir    = "./build";
	
gulp.task("index", function(done) {
    return gulp.src(`${srcDir}/index.pug`)
        .pipe(pug({pretty: true}))
        .pipe(useref())
        .pipe(gulpif("*.js", ngAnnotate()))
        .pipe(gulpif("*.js", uglify()))
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});

gulp.task("partials", function () {
    return gulp.src([
        `!${srcDir}/index.pug`,
        `${srcDir}/**/*.pug`
    ])
    .pipe(pug())
    .pipe(ngHtml2Js({
        moduleName: "app.partials",
        rename: function(path) {
            let pathParts = path.split("/");
            return "partials/" + pathParts[pathParts.length - 1];
        }
    }))
    .pipe(concat("partials.js"))
    .pipe(uglify())
    .pipe(gulp.dest(`${buildDir}/partials`))
    .pipe(browserSync.stream());
});

gulp.task("assets", function() {
    return gulp.src([
        `!${srcDir}/assets/scss/**/*.*`,
        `${srcDir}/assets/**/*.*`
    ])
    .pipe(gulp.dest(`${buildDir}/assets`))
});

gulp.task("vendors", function() {
    return gulp.src(`${srcDir}/vendors/*.js`)
        .pipe(gulp.dest(`${buildDir}/vendors/`));
});

gulp.task("styles", function () {
    return gulp.src(`${srcDir}/assets/scss/index.scss`)
        .pipe(rename("bundle.scss"))
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest(`${buildDir}/`))
        .pipe(browserSync.stream());
});

gulp.task("clear", function() {
    del([`${buildDir}/`, "./index.html"]);
});

gulp.task("build", function(done) {
    runSequence("clear", "partials", "styles", "vendors", "index", "assets", done);
});

gulp.task("serve", ["build"], function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch(`${srcDir}/index.pug`, ["index"]);
    
    gulp.watch([`!${srcDir}/vendors/**/*.*`, `${srcDir}/**/*.pug`], function() {
        runSequence("partials", "index");
    });
    
    gulp.watch([`!${srcDir}/vendors/**/*.*`, `!${srcDir}/**/*.spec.js`, `${srcDir}/**/*.js`], ["index"]);
    
    gulp.watch([`!${srcDir}/vendors/**/*.*`, `${srcDir}/**/*.scss`], function() {
        runSequence("styles", "index");
    });

    gulp.watch([`${srcDir}/assets/**/*.*`], ["assets"]);
});