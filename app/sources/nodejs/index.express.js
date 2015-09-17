'use strict';
var ExpressWebserver = require('./system/class.expressWebserver.js');
var Logger = require('./system/class.logger.js');
var http = require('http');

var eServer = new ExpressWebserver('8888');

//GEHT NICHT DYNAMISCH, BUT WHY??
//eServer.addRoute('/api', function(request, res) {
//  Logger.log('request on /');
//  res.json({ message: 'hooray! welcome to our api /api!' });
//});
//
//eServer.addRoute('/api/article', function(request, res) {
//  Logger.log('request on /article');
//  res.json({ message: 'hooray! welcome to our api /api/article!' });
//});

eServer.start();
