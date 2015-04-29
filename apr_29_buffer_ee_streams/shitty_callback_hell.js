'use strict';

var fs = require('fs');

fs.readFile('./unicorns.txt', function(err, data) {
  console.log(data.toString('utf-8'));
  fs.readFile('./second.txt', function(err, data) {
    console.log(data.toString('utf-8'));
    fs.readFile('./hello.txt', function(err, data) {
      console.log(data.toString('utf-8'));
    });
  });
});
