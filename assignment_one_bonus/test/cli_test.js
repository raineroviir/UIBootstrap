'use strict';

var greetCli = require('../greet_cli');
var expect = require('chai').expect;

describe('greet cli', function() {
  describe('the easy way', function() {
    it('should greet with mocked args', function() {
      expect(greetCli('zaphod')).to.eql('hello zaphod');
    });
  });

  describe('the hard way', function() {
    var argvCache;

    before(function() {
      argvCache = process.argv;
      process.argv = ['', '', 'toasty'];
    });

    after(function() {
      process.argv = argvCache;
    });

    it('should greet with modified process.argv', function() {
      expect(greetCli()).to.eql('hello toasty');
    });
  });
});
