'use strict';

var expect = require('chai').expect;
var greet = require('../greet_2');
var greet_func = require('../greet_2').greet;

describe('greet2', function() {
  it('should greet someone', function() {
    expect(greet.greet('zaphod')).to.eql('hello zaphod');
  });

  it('should have a greet func', function() {
    expect(greet_func('zaphod')).to.eql('hello zaphod');
  });

  it('has a pending test');
});
