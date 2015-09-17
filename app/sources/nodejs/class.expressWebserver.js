'use strict';
var express = require('express');
var Logger = require('./class.logger.js');

class ExpressWebserver {
  constructor(port) {
    this.port = port;
  }

  start() {
    this.app = express();
    this.setConfigs();
    this.initRoutes();
    this.bindListener();
  }
  setConfigs() {
    this.app.set('view engine', 'ejs');
    this.app.set('views', __dirname + '/views');
  }
  initRoutes() {
    this.app.get('/', (request, response)=> {
      Logger.log('request on /');
      response.render('index');
    });
  }
  bindListener() {
    this.app.listen(this.port, ()=>Logger.log(`Server runs on ${this.port}`));
  }
};
module.exports = ExpressWebserver;
