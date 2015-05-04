'use strict';


var greet = module.exports = function(name, callback) {
  setTimeout(function() {
    try {
      callback(null, 'hello ' + name);
    } catch(e) {
      callback(e);
    }
  }, 100); 
};

greet('zaphod', function(err, data) {
  if (err) throw err;
  console.log(data);
});
