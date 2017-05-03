'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var platzom = function platzom(str) {
  var translation = str;

  translation = translation.toLowerCase().endsWith('ar') ? translation.slice(0, -2) : translation;

  translation = translation.toLowerCase().startsWith('z') ? translation + 'pe' : translation;

  var length = translation.length;
  var half = Math.round(length / 2);
  translation = length >= 10 ? translation.slice(0, half) + '-' + translation.slice(half) : translation;

  var reverse = function reverse(str) {
    return str.toLowerCase().split('').reverse().join('');
  };
  var minMay = function minMay(str) {
    return str.split('').map(function (c) {
      return str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase();
    }).join('');
  };

  translation = str == reverse(str) ? minMay(str) : translation;

  return translation;
};

exports.default = platzom;


console.log(platzom('Programar'));
console.log(platzom('Zorro'));
console.log(platzom('Zarpar'));
console.log(platzom('abecedario'));
console.log(platzom('sometemos'));