console.log("div editable");
let divElem = document.createElement("div");
let text = document.createTextNode("This is my element . click to edit");
divElem.appendChild(text);
divElem.setAttribute("class", "divelem");
divElem.setAttribute("id", "divelem");
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");
console.log(divElem);

divElem.setAttribute(
  "style",
  "border:2px solid black; width:154px; margin:34px; padding:23px"
);

// insert the element
container.insertBefore(divElem, first);
