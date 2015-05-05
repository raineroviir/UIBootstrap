'use strict';

var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
  res.json({msg: 'hello world'});
});

app.get('/greet/:name', function(req, res) {
  res.json({msg: 'hello ' + req.params.name});
});

app.get('/greet/*/dent', function(req, res) {
  res.json({msg: 'hello mr. dent'});
});

app.get('/greet/:first_name/:last_name', function(req, res) {
  res.json({msg: 'hello ' + req.params.first_name + ' ' + req.params.last_name});
});

app.get('*', function(req, res) {
  res.status(404).json({msg: 'page not found'});
});

app.listen(3000, function() {
  console.log('server running');
});
