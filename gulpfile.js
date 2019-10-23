var gulp = require("gulp"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    browserSync = require("browser-sync").create();


gulp.task("sass", function () {
    return gulp.src("src/scss/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("src/css"));

});

gulp.task("watch", function () {
    gulp.watch("src/scss/*.scss", gulp.series("sass"));

});

gulp.task("cssDocs", function () {
    return gulp.src("src/css/*.css")
        .pipe(gulp.dest("docs/css"));

});

gulp.task("jsDocs", function () {
    return gulp.src("src/js/*.js")
        .pipe(gulp.dest("docs/js"));

});

gulp.task("fontsDocs", function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("docs/fonts"));

});

gulp.task("htmlDocs", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("docs"));

});

gulp.task("imgDocs", function() {
    return gulp.src("src/img/**/*.*")
        .pipe(gulp.dest("docs/img"));

});

gulp.task("serve",function () {
    browserSync.init({
        server: "src"
    });
    browserSync.watch("src/**/*.*").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("sass", "watch", "serve"));











