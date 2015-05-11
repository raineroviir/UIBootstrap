'use strict';

for(var i = 0; i < 10; i++) {
  (function(num) {
    process.nextTick(function() {
      console.log(num);
    });
  })(i);
}
