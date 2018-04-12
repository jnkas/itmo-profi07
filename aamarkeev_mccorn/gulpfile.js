var gulp = require('gulp'); 
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Задача умолчанию, перед которой выполнится 
//задача 'Запуск сервера'('browser-sync'):
gulp.task('default',['browser-sync'], function () {
    gulp.watch('site/**/*', ['build'])
    .on('change', browserSync.reload); //Refresh
});

//Задача 'build':
gulp.task('build',['sass'], function () {
    return gulp.src('site/**/*')
           .pipe(gulp.dest('../public/site'));
});

//Новая задача 'Запуск сервера'('browser-sync'):
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "../public/site"
        }
    });
});

//Препроцессор 'sass':
gulp.task('sass', function () {
  return gulp.src('site/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../public/site/css'));
});
