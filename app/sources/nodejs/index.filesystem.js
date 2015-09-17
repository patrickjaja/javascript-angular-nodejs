'use strict';
var Filesystems = require('./class.filesystem');

var filesystem = new Filesystems('tmp/text.txt');
filesystem.readFile();
