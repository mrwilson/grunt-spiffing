/*
 * grunt-spiffing
 * https://github.com/mrwilson/grunt-spiffing
 *
 * Copyright (c) 2013 Alex Wilson
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

module.exports = function(grunt) {

  grunt.registerMultiTask('spiffing', 'Compile spiffing files to css.', function() {
    
    var options = this.options();

    this.files.forEach(function(f) {
      var src = f.src.filter(verifyFiles).map(spiffingProcess);
      grunt.file.write(f.dest, src);
      grunt.log.writeln('File "' + f.dest + '" transformed.');
    });
  });

  var replacements = {
      'colour':'color',
      'grey':'gray',
      '!please':'!important',
      'transparency' :'opacity',
      'centre':'center',
      'plump':'bold',
      'photograph':'image',
      'capitalise':'capitalize'
  };

  var spiffingProcess = function spiffingProcess(file) {
    var content = grunt.file.read(file);
    for (var r in replacements) {
      content = content.replace(r, replacements[r]);
    }

    return content;
  };

  var verifyFiles = function verifyFiles(filepath) {
    grunt.log.writeln('Processing '+filepath);
    
    if (!grunt.file.exists(filepath)) {
      grunt.log.warn('Source file "' + filepath + '" not found.');
      return false;
    }
    
    return true;
    
  };

};