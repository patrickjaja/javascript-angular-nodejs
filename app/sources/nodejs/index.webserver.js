'use strict';
var webserver = require('./system/class.webserver.js');

var websvr = new webserver('8080');
websvr.start();
