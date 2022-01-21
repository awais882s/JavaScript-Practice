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
  "border:2px solid black; width:180px; margin:30px; padding:10px"
);
// grab the main container

let container = document.querySelector(".container");
let first = document.getElementById("myfirst");
// insert the element before element with id first

container.insertBefore(divElem, first);
console.log(divElem, container, first);
// add event listener on the div
divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class=" textarea form-control" id = "textarea" rows="3">${html}</textarea>`;
  }
  // listen for the blur event on textarea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
  });
});
