//подключение плагина gulp:
var gulp = require('gulp'); 
var browserSync = require('browser-sync').create();

//Задача умолчанию, перед которой выполнится 
//задача 'Запуск сервера'('browser-sync'):
gulp.task('default',['browser-sync'], function () {
    gulp.watch('site/**/*', ['build'])
    .on('change', browserSync.reload); //Refresh
});

//Задача 'build':
gulp.task('build', function () {
    return gulp.src('site/**/*')
           .pipe(gulp.dest('../public'));
});

//Новая задача 'Запуск сервера'('browser-sync'):
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "../public"
        }
    });
});