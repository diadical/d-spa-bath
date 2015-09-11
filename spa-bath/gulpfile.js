// gulp and plugins
var gulp = require('gulp'),
    gls = require('gulp-live-server');

gulp.task('default', function () {
    console.log('hello!');
});

gulp.task('serve', function () {
    //1. serve with default settings
    var server = gls.static(); //equals to gls.static('public', 3000);
    server.start();
    
    //2. serve at custom port
    //var server = gls.static(['dist'], 19000);
    //server.start();
    
    //3. serve multi folders
    //var server = gls.static(['dist', '.tmp']);
    //server.start();
    
    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['static/**/*.css', 'static/**/*.html'], function (file) {
        server.notify.apply(server, [file]);
    });
});