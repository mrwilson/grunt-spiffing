'use strict';

var grunt = require('grunt');

exports.spiffing = {
  transform: function(test) {
    var actual = grunt.file.read('tmp/output.css');
    var expected = grunt.file.read('test/expected/expected.css');
    test.equal(actual, expected, 'should apply the transformations to the css.');
    test.done();
  }
};
