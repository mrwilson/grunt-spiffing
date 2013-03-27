/*
 * grunt-spiffing
 * https://github.com/mrwilson/grunt-spiffing
 *
 * Copyright (c) 2013 Alex Wilson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {        
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "boss": true,
        "eqnull": true,
        "node": true,
        "es5": true
      },
    },

    clean: {
      tests: ['tmp'],
    },

    spiffing: {
      transform: {
        files: {
          'tmp/output.css': ['test/fixtures/input.css'],
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'spiffing', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);

};
