var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task("html", function () {
  return gulp.src("./dev/*.html")
  .pipe(gulp.dest("publik/site"))
});

gulp.task('sass', function () {
  return gulp.src('./dev/*.scss')
    .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(gulp.dest('publik/site/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./publik/site"
    });

    gulp.watch("./dev/*.scss", ['sass']);
    gulp.watch("./dev/*.html", ["html"]).on('change', browserSync.reload);
});






gulp.task("default", ["html", "sass", "serve"]);
