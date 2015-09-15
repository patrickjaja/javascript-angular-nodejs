//Javascript Basics

//Einfache Objekttypen

var a = 'Textwert';
console.log( typeof a);

var b = 42; // 'number'

var c = true; //false // 'boolean'

var d = ''; // 'string'?

console.log(typeof d);

console.log(d == false);
console.log(d === false);

console.log(b + 108 + a);
console.log(a + b + 108);
console.log(a + (b + 108));

var f;
console.log(f);
if (typeof f === 'undefined') {
  console.log('F===undefined 1');
}
if (f === undefined) {
  console.log('F=== undefined 2');
}
if (!f) {
  console.log('!F undefined 3');
}

var arr = [];
arr = [true, 2, 'drei'];
console.log(arr[0]);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

delete(arr[1]);
console.log(arr);

arr.splice(1, 1);
console.log(arr);

var obj = {
  'key_1' : true,
  'key_2' : 2,
  'key_3' : 'drei',
  'test 1' : 'teeest'
}
console.log(obj);

for (key in obj) {
  console.log(key);
  console.log(obj[key]);
}

function log(m) {
  var m = m || 'default';
  if (typeof m === 'undefined') {
    m = 'default';
  }
}

var add = function (x) {
  var erg = x + x;
  return erg;
}

var g = add(5);
console.log('Erg:' + g);

var collection = document.querySelectorAll('a[href]');
for (var i = 0; i < collection.length; i++) {
  collection[i].addEventListener('click', function (event) {

    event.preventDefault();
    console.log(event.target.getAttribute('href'));
  });
}
var program = function() {
  var a = 1;
};

for (var k in window) {
  console.log(k);
}

// Immediate function
(function () {
  var a = 1;
  console.log(a);
})();

var qits = window.qits || {};


// IIFE - Immediate invoked function expression
qits.logger = (function () {
  'use strict';

  var fn = {};
  fn.add = function () {

  }
  fn.log = function (m) {
    console.log(m);
  }
  return fn;
})();

qits.logger.log('Immediate Test Call');
