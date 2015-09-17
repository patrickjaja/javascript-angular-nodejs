'use strict';
importScripts('module.js');

//self.addEventListener('message', function(e) {
//  self.postMessage(e.data);
//}, false);

console.log('WORKER RUNS!');

//var fn = {};
qits.http.xdr('http://api.icndb.com/jokes/random', 'GET', {}).then(function(response) {
  self.postMessage(JSON.stringify(response));
});
//fn.askChuck = function () {
  //var xhr = new XMLHttpRequest();
  //xhr.onreadystatechange = function () {
  //  if (xhr.readyState === 4) {
  //    switch(xhr.status) {
  //      case 200:
  //    }
  //  }
  //};
  //
  //xhr.open('GET', 'http://api.icndb.com/jokes/random');
  //xhr.send();

//};
//fn.terminate = function () { self.close(); };


