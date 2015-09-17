var qits = window.qits || {};

qits.chuck = (function () {
  'use strict';
  var fn = {};
  var worker = undefined;

  fn.init = function () {
    worker = new Worker('js/task.js');
    worker.addEventListener('message', function(event) {
      fn.onmessage(event)
    });
    fn.start();
  }
  fn.onmessage = function (e) {
    var data = JSON.parse(e.data);
    var joke = data.value.joke;
    document.querySelector('.content-aside').innerHTML = joke;
  }
  fn.terminate = function () {
    worker.terminate();
  }
  fn.start = function () {
    worker.postMessage('go');
  }

  return fn;
})();

qits.chuck.init();
