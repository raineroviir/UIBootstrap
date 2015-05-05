'use strict';

var JSONPromise = require('../json_promise');
var expect = require('chai').expect;

describe('ee based promise', function() {
  it('should run a function on success', function(done) {
    var promise = JSONPromise('{"msg": "hello world"}');
    promise.success(function(data) {
      console.log(data);
    });
    promise.success(function(data) {
      expect(data.msg).to.eql('hello world');
      done();
    });
    promise.parseJson();
  });
});
