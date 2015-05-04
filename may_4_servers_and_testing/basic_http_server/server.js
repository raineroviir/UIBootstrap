'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.url === '/hello') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    if (req.method === "POST") {
      console.log('post');
      req.on('data', function(data) {
        var body = JSON.parse(data.toString('utf-8'));
        res.write(JSON.stringify({msg: 'hello ' + body.name}));
        res.end();
      });
    } else {
      res.write(JSON.stringify({msg: 'hello world'}));
      res.end();
    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.write(JSON.stringify({msg: 'could not find page'}));

    res.end();
  }
});

server.listen(3000, function() {
  console.log('server started');
});
