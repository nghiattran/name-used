'use strict';

var http = require('http');
module.exports = function(pkg, cb){
  var options = {
    hostname: 'registry.npmjs.org',
    path: '/' + pkg,
  };

  return new Promise(function (fulfill, reject) {
    http.get(options, (res) => {
      if (res.statusCode - 200 < 100) {
        fulfill(true);
      } 
      fulfill(false);
    });
  })
};