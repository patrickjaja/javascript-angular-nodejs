'use strict';
var webserver = require('./class.webserver');

//setInterval(()=> {
//  console.log('Hallo Welt');
//}, 2000);

var websvr = new webserver('8080');

websvr.start();