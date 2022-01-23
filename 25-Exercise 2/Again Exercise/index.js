console.log("div editable");
let divElem = document.createElement("div");
let text = document.createTextNode("This is my element . click to edit");
divElem.appendChild(text);
console.log(divElem);

divElem.setAttribute("class", "divelem");
divElem.setAttribute("id", "divelem");
