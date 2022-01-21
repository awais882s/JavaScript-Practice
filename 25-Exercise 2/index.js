console.log("Div editable");
let divElem = document.createElement("div");
let text = document.createTextNode("This is my element. click to edit it");

divElem.setAttribute("id", "elem");
divElem.setAttribute("style", "border:2px");
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");
console.log(divElem, container, first);
