'use strict';

var jsonPromise = require('../json_promise');
var expect = require('chai').expect;

describe('q base promise', function() {
  it('should parse json', function(done) {
    var promise = jsonPromise('{"msg": "hello world"}');
    promise.then(function(obj){
      console.log(obj);
    });
    promise.then(function(obj) {
      expect(obj.msg).to.eql('hello world');
      done();
    });
  });

  it('should handle errors', function(done) {
    var promise = jsonPromise('this is not json}');
    promise.then(function() {
      //never called 
    }, function(err) {
      expect(err).to.not.eql(null);
      expect(err.message).to.eql('Unexpected token h');
      done();
    });
  });
});
