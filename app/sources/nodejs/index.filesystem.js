'use strict';
var Filesystems = require('./system/class.filesystem.js');

var filesystem = new Filesystems('tmp/text.txt');
filesystem.readFile();
