//подключение плагина gulp:
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//Задача для gulp по умолчанию: мониторить изменения в папке site, если есть изменения, выполнить build
gulp.task('default',['browser-sync'], function () {
    gulp.watch('site/**/*'/*, ['build']*/)
    .on('change', browserSync.reload); //Refresh
});

////Новая задача для gulp 'build': перенести файлы из site в public
//gulp.task('build', function () {
//    return gulp.src('site/**/*')
//           .pipe(gulp.dest('../public'));
//});

//Новая задача 'Запуск сервера'('browser-sync'):
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "site"
        }
    });
});