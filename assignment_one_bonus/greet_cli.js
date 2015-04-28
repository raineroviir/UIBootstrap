'use strict';

var greet = require('./greet');

var greetCli = module.exports = function(name) {
  name = name || process.argv[2]; 
  return greet(name);
};

console.log(greetCli());
