console.log("links");
let str = "https://muhammad-awais-house.business.site/";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function (element) {
  href = element.href;
//   console.log(element);
//   console.log(href);
  if (href.includes(str)) {
    console.log(href);
  }
});
