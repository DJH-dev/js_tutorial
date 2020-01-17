(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = Phrase;

//Add `reverse` to all strings
String.prototype.reverse = function() {
  return Array.from(this)
    .reverse()
    .join("");
};

String.prototype.blank = function() {
  return !!this.match(/^\s*$/gm);
};

Array.prototype.last = function() {
  return this.pop();
};

//Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  //Returns the letters in the content.
  this.letters = function letters() {
    const lettersRegex = /[a-z]/gi;
    return (this.content.match(lettersRegex) || []).join("");
  };

  //Returns true for a palindrom, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };

  //Returns the content in uppercase form.
  this.louder = function louder() {
    return this.content.toUpperCase();
  };
}

},{}],2:[function(require,module,exports){
let Phrase = require("bdvloped-palindrome");

let string = prompt("Please enter a string for a palindrome testing");
let phrase = new Phrase(string);

if(phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome`);
}

},{"bdvloped-palindrome":1}]},{},[2]);
