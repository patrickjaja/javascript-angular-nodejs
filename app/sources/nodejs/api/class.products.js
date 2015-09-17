'use strict';
var http = require('http');

class Products {
  constructor(port) {
    this.port = port;
  }
  static search(cb) {
    http.get('http://api.icnd.com/jokes/random', function (response) {
      cb(response);
    });
  }
};
module.exports = Webserver;
