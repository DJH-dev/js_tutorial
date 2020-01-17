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

  this.processor = function(string) {
    return string.toLowerCase();
  };

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
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
