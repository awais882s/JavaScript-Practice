console.log("Understanding DOM,s");
let a = document;
a = document.all;
// a = document.body;
// a = document.forms;
// Array.from(a).forEach(function (element) {
//   console.log(element);
// });

// a = document.body;
// a = document.forms[0];
// console.log(a);
b = document.links[0].href;
// use document.images and document.scripts and print the list of images and scripts on the html pages
console.log(b);
img = document.images;
console.log(img);
// exercise

var b = document.links;
var string = "4";
Array.from(b).forEach(function (element) {
  if (element.href.includes(string)) 
  console.log(element.href);
});
