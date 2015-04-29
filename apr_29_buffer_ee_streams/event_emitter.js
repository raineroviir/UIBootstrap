'use strict';

var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var Hello = function() {};
inherits(Hello, EventEmitter);

var hello = new Hello;

hello.on('rainbows', function(filename) {
  fs.readFile(filename, function(err, data) {
    if (err) throw err;
    console.log(data.toString('utf-8'));
  });
  console.log('Rainbows, hoooooooooraaaaaay!');
});

//fs.readFile('./unicorns.txt', function(err, data) {
//  if (err) throw err;
//  console.log(data.toString('utf-8'));
//  hello.emit('rainbows', './hello.txt');
//});

hello.emit('rainbows', './second.txt');
hello.emit('rainbows', './hello.txt');
hello.emit('rainbows', './unicorns.txt');
