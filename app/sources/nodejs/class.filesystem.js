'use strict';
var fs = require('fs');
var System = require('./class.system');
var Logger = require('./class.logger.js');
var Exceptions = require('./class.exceptions');

class Filesystems extends System {
  constructor(filename) {
    super();
    this.filename=filename;
  }
  readFile() {
    fs.readFile(this.filename, this.onReadFile);
  }
  onReadFile(err, data) {
    if (err) {
      Exceptions.error(err);
    } else {
      Logger.log(data);
      Logger.log(data.toString());
    }
  }
};
module.exports = Filesystems;
