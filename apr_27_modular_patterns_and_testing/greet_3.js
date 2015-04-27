'use strict';

var Greet = module.exports = exports = function() {};

Greet.prototype.greet = function(name) {
  return 'hello ' + name;
};
