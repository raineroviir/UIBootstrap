'use strict';

var assert = require('assert');

describe('false positive', function() {
  it('will  have a false positive', function() {
    //no expect statement, false positive
  });

  it('should fail async', function() {
    setTimeout(function() {
      assert.equal(false, true); 
    }, 1000);
  });

  it('should not fail', function(done) {
    setTimeout(function() {
      assert.equal(true, true);
      done();
    }, 500);
  });

  it('should give a false positive', function(done) {
    setTimeout(function() {
      assert.equal(false, true);
    }, 500);
    done();
  });
});
