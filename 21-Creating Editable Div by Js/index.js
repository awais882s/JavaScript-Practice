console.log("Creating Editable Div Using JavaScript");
// Part-1 :You Have to create a div and enter into the page.=========================================
let createElem = document.createElement("div");
createElem.id = "createElem";
createElem.innerHTML = "Submit Text To Local Storage By Clicking on Text :";
document.body.appendChild(createElem);

// Part-2 :Whenever someone clicks on the div ,it should be converted into an editable item.==============================

let getText = document.getElementById("createElem");
console.log(getText);
getText.addEventListener("dblclick", func1);
function func1() {
  let createInputElem = document.createElement("input");
  createInputElem.id = "createinputElem";
  createInputElem.type = "text";
  createInputElem.innerText = "";
  createElem.appendChild(createInputElem);
}

// Part-1 :You Have to create a div and enter into the page.

let createElem = document.createElement("div");
createElem.id = "createElem";
createElem.innerText = "Submit Text To Local Storage By Clicking on Text : ";

document.body.appendChild(createElem);

// Part-2 :Whenever someone clicks on the div ,it should be converted into an editable item.

let getText = document.getElementById("createElem");
console.log(getText);
getText = addEventListener("dblclick", func1);

function func1() {
  let createinputElem = document.createElement("input");
  createinputElem.id = "createinputElem";
  createinputElem.type = "text";
  createinputElem.innerText = "";
  createElem.appendChild(createinputElem);
}

// Part-3 :and whenever user clicks away(blur). save the note into the local storage.===================

