'use strict';

var express = require('express');
var app = express();

var middlewareOne = function(req, res, next) {
  console.log('hello from one');
  req.greeting = 'hello world!';
  next();
};

var middlewareTwo = function(req, res, next) {
  console.log('hello from two');
  console.log(req.greeting);
  next();
};

var middlewareThree = function(req, res, next) {
  console.log('hello from three');
  next();
};

var middlewareFour = function(req, res, next) {
  console.log('hello from four');
  next();
};

app.use(middlewareThree);

app.get('/demo', middlewareOne, middlewareTwo, function(req, res) {
  res.send(req.greeting);
});

app.use(middlewareFour);

app.get('/another', function(req, res) {
  res.send('hello from another');
});

app.listen(3000, function() {
  console.log('server running');
});
