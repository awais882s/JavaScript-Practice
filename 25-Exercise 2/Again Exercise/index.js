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
  "border:3px solid black; width:154px; margin:40px; padding:25px"
);

// insert the element
container.insertBefore(divElem, first);

// event listeners
divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  console.log(noTextAreas);
  if (noTextAreas == 0) {
    let html = divElem.innerHTML;
    console.log(html);
    divElem.innerHTML = `<textarea class=" textarea form-control" id = "textarea"  rows="3">${html}</textarea>`;
  }
  //   for blur
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    divElem.innerHTML = textarea.value;
  });
});
