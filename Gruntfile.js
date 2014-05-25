'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '**/*.html',
                    '**/*.js',
                    '{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: process.env.PORT || 9000,
                hostname: process.env.IP || '0.0.0.0',
                livereload: 35729
            },

            livereload: {
                options: {
                    open: true,
                    base: './'
                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        }
    });

    grunt.registerTask('server', function() {
        grunt.task.run([
           'connect:livereload',
           'watch'
        ]);
    });

    grunt.registerTask('default', [ 'server' ]);
};
