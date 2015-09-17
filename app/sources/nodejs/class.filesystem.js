'use strict';
var http = require('http');

class Webserver {
  constructor(port) {
    this.port = port;
  }
  start() {
    this.server = http.createServer(this.handleRequest);
    this.bindListener();
  }
  bindListener() {
    this.server.listen(this.port, ()=>{
      console.log(`Server listening on: http://localhost:${this.port}`);
    });
  }
  handleRequest(request, response) {
    response.end(`It Works!! Path Hit: ${request.url} `);
  }
};
module.exports = Webserver;
