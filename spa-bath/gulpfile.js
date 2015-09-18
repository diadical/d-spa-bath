// gulp and plugins
var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    durandal = require('gulp-durandal');

gulp.task('default', function () {
    console.log('hello!');
});

gulp.task('assets', function() {
  
});

gulp.task('durandal', function () {
    var app = 'demo';

    return durandal({
        baseDir: 'applications/' + app,
        main: 'main.js',
        output: app + '.js',
        almond: true,
        minify: false,
        rjsConfigAdapter: function (rjsConfig) {
            rjsConfig.paths = {
                // r.js text plugin
                'text': '../../bower_components/requirejs-text/text',
                // durandal
                'durandal': '../../bower_components/Durandal/js',
                'plugins': '../../bower_components/Durandal/js/plugins',
                'transitions': '../../bower_components/Durandal/js/transitions',
                // vendor
                'jquery': 'empty:',
                'knockout': 'empty:',
                'q': 'empty:'
            }
            return rjsConfig;
        }
    }).pipe(gulp.dest('dist/apps/' + app + '.js'));
});

gulp.task('serve', ['durandal'], function () {
    var app = 'demo',
        server = gls(['server.js', app]);
    server.start();
    gulp.watch('applications/' + app + '/**/*', [
        'durandal'
    ]).on('change', function (file) {
        server.notify([file]);
    });
});
