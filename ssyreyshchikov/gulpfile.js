var gulp = require('gulp'); 
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

gulp.task('default',['browser-sync'], function () {
    gulp.watch('site/**/*', ['build'])
    .on('change', browserSync.reload); //Refresh
});

//Сборка 'build':
gulp.task('build',['sass', 'images'], function () {
    return gulp.src('site/*.html')
           .pipe(gulp.dest('../public'));
});

//Препроцессор 'sass':
gulp.task('sass', function () {
  return gulp.src('site/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../public/css'));
});

//Перенос и сжатие картинок 'images':
gulp.task('images', function () {
    return gulp.src('site/images/**/*')
           .pipe(gulp.dest('../public/images'));
});

//Задача 'Запуск сервера'('browser-sync'):
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "../public"
        }
    });

});