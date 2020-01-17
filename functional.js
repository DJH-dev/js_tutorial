let states = ["Kansas", "North Dakota", "Nebraska", "South Dakota"];

//Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string
    .toLowerCase()
    .split(/\s+/)
    .join("-");
}

//urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

//urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//Return URLS of the form https://example.com/<urlified form>
function completeURL(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(completeURL(states));

//singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

//Dakota: Imperative version
function dakotaDetection(elements) {
  let dakotas = [];
  elements.forEach(function(element) {
    if (element.includes("Dakota")) {
      dakotas.push(element);
    }
  });
  return dakotas;
}
console.log(dakotaDetection(states));

//Dakota: Functional version
function functionalDetection(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalDetection(states));

//Dakota: Regex Functional version
function reFunctionalDakotas(elements){
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(reFunctionalDakotas(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

//sum: Functional version
function functionalSum(elements){
return elements.reduce((total , n) => {return total += n;});
}
console.log(functionalSum(numbers));

//lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element){
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

//lengths: Functional solution
function functionalLengths(elements) { return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});}
console.log(functionalLengths(states));