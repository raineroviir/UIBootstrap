'use strict';

var recurse = function(current, max, callback) {
  if (current > max) return;
  process.nextTick(function() {
    callback(current);
    recurse(current + 1, max, callback);
  });
};

recurse(0, 10, function(num) {
  console.log('loop 1: ' + num);
});

recurse(0, 10, function(num) {
  console.log('loop 2: ' + num);
});
