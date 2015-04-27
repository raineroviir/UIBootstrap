'use strict';

var expect = require('chai').expect;
var Greet = require('../greet_3');

describe('Greet', function() {
  var greet;

  before(function() {
    greet = new Greet();
  });

  it('should be able to greet someone', function() {
    expect(greet.greet('zaphod')).to.eql('hello zaphod');
  });
});
