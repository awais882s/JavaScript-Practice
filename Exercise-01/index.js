console.log("links");
let str = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function (element) {
  href = element.href;
  console.log(href);
});
