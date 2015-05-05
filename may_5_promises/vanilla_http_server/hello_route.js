'use strict';

module.exports = function(routes) {
  routes['GET']['/hello'] = function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.write(JSON.stringify({msg: 'hello world'}));
    res.end();
  };

  routes['POST']['/hello'] = function(req, res) {
    var body = '';
    req.on('data', function(data) {
      body += data.toString('utf-8');
    });

    req.on('end', function(data) {
      body += data ? data.toString('utf-8') : '';
      var parsed; 
      try {
        parsed = JSON.parse(body); 
      } catch(e) {
        res.writeHead(422, {
          'Content-Type': 'application/json'
        });

        res.write('{"msg":"not valid json"}');
        return res.end();
      }
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.write(JSON.stringify({msg: 'hello ' + (parsed.name || 'ya dun fuckt up')}));
      res.end();
    });
  };
};
