'use strict';

var http = require('http');

var routes = {
  'GET': {},
  'POST': {},
  'PUT': {},
  'PATCH': {},
  'DELETE': {}
};

require('./hello_route')(routes);

routes['four_oh_four'] = function(req, res) {
  res.writeHead(404, {
    'Content-Type': 'application/json'
  });

  res.write('{"msg":"page not found"}');
  res.end();
};

var server = http.createServer(function(req, res) {
  if (typeof routes[req.method][req.url] === 'function')
    routes[req.method][req.url](req, res);
  else
    routes['four_oh_four'](req, res);
});

server.listen(3000, function() {
  console.log('server running');
});
