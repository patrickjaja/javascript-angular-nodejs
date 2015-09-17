// MODULE SCHREIBEN

var qits = qits || {};

qits.http = (function() {
  'use strict';
  var fn = {};
  fn.get = function(url) {
    console.log('get HTTP');
    fn.xdr(url, 'GET', {}).then(function(response) {
      document.querySelector('#page-main').innerHTML = response;
      //console.log('OK RESPONSE '+response);
    }).catch(function(error) {
      document.querySelector('#page-main').innerHTML = 'Seite nicht gefunden.';
    });
  };
  fn.post = function() {

  };

  /**
   * Makes a request
   * @param  {String}   url      URL
   * @param  {String}   method   Method type (GET/POST)
   * @param  {String}   data     Content
   */
  fn.xdr = function(url, method, data) {
    var promise = function(resolve, reject) {
      var xhr = new XMLHttpRequest();

      if ('withCredentials' in xhr) {
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest !== 'undefined') {
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        reject('CORS is not supported')
      }

      xhr.onload = function() {
        resolve(xhr.responseText);
      };

      xhr.onerror = function() {
        reject('XMLHttpRequest error');
      };

      // IE <= 9 doesn't allow to set Content-type
      if (xhr.setRequestHeader) {
        //xhr.setRequestHeader('Content-type', 'application/json');
      }

      //do it, wrapped in timeout to fix ie9
      setTimeout(function() {
        xhr.send(data);
      }, 0);

    }

    return new Promise(promise);
  };
  fn.onClick = function(event) {
    console.log('GEKLICKT');
    console.log(event);
    var url = event.target.getAttribute('href');
    fn.get(url);
    event.preventDefault();
  };
  return fn;
})();

//window.addEventListener('load', function() {
//  var collection = document.querySelectorAll('.nav');
//  //for (var i = 0; i < collection.length; i++) {
//    collection[0].addEventListener('click', qits.http.onClick);
//  //}
//});
