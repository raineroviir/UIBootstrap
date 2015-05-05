'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.url === '/hello') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    if (req.method === "POST") {
      console.log('post');
      var body = '';
      req.on('data', function(data) {
        body += data.toString('utf-8');
      });
      req.on('end', function(data) {
        body += data ? data.toString('utf-8') : '';
        var parsedBody;
        try {
          parsedBody = JSON.parse(body);
        } catch(e) {
          console.log(e);
          res.write(JSON.parse({msg: 'invalid json'}));
          return res.end();
        }
        res.write(JSON.stringify({msg: 'hello ' + parsedBody.name}));
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
