'use strict';

var expect = require('chai').expect;
var greet = require('../greet');

describe('greet.js', function() {
  it('should greet someone', function() {
    expect(greet('zaphod')).to.eql('hello zaphod');
  });
});
