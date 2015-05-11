'use strict';

var recurseLoop = function(num) {
  if (num >= 10) return;
  console.log(num);
  process.nextTick(function() {recurseLoop(num + 1);});
};

recurseLoop(0);
