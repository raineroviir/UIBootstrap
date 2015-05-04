'use strict';

var greet = require('../callback_lib');
var expect = require('chai').expect;

describe('greet', function() {
  it('should greet someone', function(done) {
    greet('test', function(err, data) {
      expect(err).to.eql(null);
      expect(data).to.eql('hello test');
      done();
    });
  });
});
