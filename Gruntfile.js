module.exports = function (grunt) {

    // Grunt Tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        meta: {
            version: '0.0.3'
        },

        // Sass
        sass: {
            test: {
                options: {
                    style: 'expanded',
                    loadPath: './node_modules/bootcamp/dist' // or './bower_components/bootcamp/dist'
                },
                files: {
                    './results.css': './tests.scss'
                }
            }
        },

        // Bootcamp
        bootcamp: {
            test: {
                files: {
                    src: ['./results.css']
                }
            }
        },

        // Watch
        watch: {
            dist: {
                files: ['./**/*.scss'],
                tasks: ['sass', 'bootcamp']
            }
        }
    });

    // Modules
    grunt.loadNpmTasks('grunt-init');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('bootcamp');

    // Tasks
    grunt.registerTask('default', ['sass', 'bootcamp', 'watch']);
    grunt.registerTask('test', ['sass', 'bootcamp']);
};