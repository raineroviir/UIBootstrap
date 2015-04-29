'use strict';

var fs = require('fs');

fs.readFile('./second.txt', function(err, data) {
  if(err) throw err;
  console.log(data.toString());
});

fs.readFile('./hello.txt', function(err, data) {
  if(err) throw err;
  console.log(data.toString('utf-8'));
});

console.log('first');

process.nextTick(function() {
  console.log('operation unicorn');
});

for(;;);
