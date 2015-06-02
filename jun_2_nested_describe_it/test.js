'use strict';

var expect = require('chai').expect;

describe('first', function() {
  before(function() {
    this.someVar = 'from first';
  });

  describe('second', function() {
    it('might be able to see someVar', function() {
      expect(this.someVar).to.eql('from first');
    });
  });
});
