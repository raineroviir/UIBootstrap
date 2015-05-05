'use strict';

var q = require('q');

module.exports = function(jsonString) {
  var defer = q.defer();
  try {
    var parsed = JSON.parse(jsonString); 
    defer.resolve(parsed);
  } catch (e) {
    defer.reject(e);
  };

  return defer.promise;
};
