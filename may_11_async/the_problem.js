'use strict';

for(var i = 0; i < 10; i++) {
  process.nextTick(function() {
    console.log(i);
  });
}
