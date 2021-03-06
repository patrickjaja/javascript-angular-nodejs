'use strict';
var express = require('express');
var Logger = require('../system/class.logger.js');
var socketio = require('socket.io');
var router = express.Router();
var config = require('../config');
var mysql = require('mysql');
var db = mysql.createConnection(config);
var port = 8888;


class ExpressWebserver {
  constructor(port) {
    this.port = port;
    this.routes = [];
  }

  start() {
    this.app = express();
    this.http = require('http').Server(this.app);
    this.io = require('socket.io')(this.http);
    this.setConfigs();
    this.initRoutes();
    this.bindListener();
  }
  setConfigs() {
    this.app.set('view engine', 'ejs');
    this.app.set('views', __dirname + '/../views');
    //this.app.use('/api', router);
  }
  initRoutes() {
    //for(var i=0; i < this.routes.length-1; i++) {
    //  this.app.get(this.routes[i].path, (req, res) => {
    //    this.routes[i].cb(req, res);
    //  });
    //}
    //this.app.get('/api', (req, res) => {
    //  Logger.log('request on /');
    //  res.json({ message: 'hooray! welcome to our api /!' });
    //});
    //this.app.get('/api/orders/:orderNR', function (req, res){
    //
    //  var connection = mysql.createConnection(config);
    //
    //  connection.connect();
    //  console.log('PARAM:'+req.params.orderNR);
    //  connection.query('SELECT * FROM AUFT WHERE orderNR='+req.params.orderNR, function(err, rows, fields) {
    //    if (err) throw err;
    //
    //    console.log('The solution is: ', rows[0]);
    //
    //    Logger.log('request on /');
    //    res.json({ message: rows });
    //
    //  });
    //
    //  connection.end();
    //});
    this.app.get('/chat', function (request, response) {
      console.log('request on /chat');
      response.render('chat');
    });
  }
  bindListener() {
    this.app.listen(this.port, ()=>Logger.log(`Server runs on ${this.port}`));
    this.http.listen('3000',function() {
      console.log('Socket proxy runs on 3000');
    });
    this.io.on('connection', (socket)=>{
      console.log('User connected');
    });
  }
  addRoute(path, cb) {
    this.routes.push({path, cb});
  }
};
module.exports = ExpressWebserver;
