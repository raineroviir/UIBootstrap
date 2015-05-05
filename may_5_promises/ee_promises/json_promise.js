'use strict';

var EE = require('events').EventEmitter;
var inherits = require('util').inherits;

var JSONPromise = function(jsonString) {
  this.jsonString = jsonString;
};

inherits(JSONPromise, EE);

JSONPromise.prototype.parseJson = function(jsonString) {
 try {
    var parsed = JSON.parse(jsonString || this.jsonString);
    this.emit('success', parsed);
  } catch(e) {
    this.emit('error', e);
  }
};

JSONPromise.prototype.success = function(callback) {
  this.on('success', callback); 
};

JSONPromise.prototype.error = function(callback) {
  this.on('error', callback);
};

module.exports = function(jsonString) {
  return new JSONPromise(jsonString); 
};
