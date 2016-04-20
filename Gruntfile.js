var grunt = require('grunt'),
    jsHintReporter = require('jshint-teamcity');

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-processhtml');

// Project configuration.
grunt.initConfig({
    jshint: {
        options: {
            reporter: jsHintReporter
        },
        build: ['Gruntfile.js', 'src/**/*.js']
    },

    uglify: {
        options: {
            mangle: true,
            compress: true,
            beautify: false
        },
        build: {
            files: {
                'build/app.min.js': ['src/**/*.js']
            }
        }
    },

    processhtml: {
        build: {
            files: {
                'build/index.html': ['src/index.html']
            }
        }
    }

});

grunt.registerTask('build', ['jshint', 'uglify', 'processhtml']);