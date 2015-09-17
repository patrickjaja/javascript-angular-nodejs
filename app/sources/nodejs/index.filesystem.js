'use strict';
var Filesystems = require('./class.filesystem');

//setInterval(()=> {
//  console.log('Hallo Welt');
//}, 2000);

var filesystem = new Filesystems('tmp/text.txt');

filesystem.readFile();
