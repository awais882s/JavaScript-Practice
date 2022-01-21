console.log("Div editable");
// create a new element
let divElem = document.createElement("div");
// add text in that created element
let text = document.createTextNode("This is my element. click to edit it");
divElem.appendChild(text);
divElem.setAttribute("class", "elem");
divElem.setAttribute("id", "elem");
divElem.setAttribute(
  "style",
  "border:2px solid black; width:154px; margin:34px"
);
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");
// insert the element before element with id first

container.insertBefore(divElem, first);
console.log(divElem, container, first);
