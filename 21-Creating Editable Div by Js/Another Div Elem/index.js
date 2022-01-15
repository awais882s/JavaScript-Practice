console.log("welcome my div ");
// part1========================================================///////

let createElem = document.createElement("div");
createElem.id = "createElem";
createElem.innerHTML = `<h2>Submit text to local storage by clicking on the Text:</h2>`;
document.body.appendChild(createElem);
console.log(createElem);

// part2===================================================/////////

let getText = document.getElementById("createElem");
getText.addEventListener("dblclick", function () {
  let createInputElem = document.createElement("input");
  createElem.id = "createInputElem";
  createInputElem.type = "text";
  createInputElem.innerText = "";
  createElem.appendChild(createInputElem);
  let getTextValue = document.getElementById("createInputElem");
getTextValue.addEventListener("click", function () {
  let getValueof = createInputElem.value;
  localStorage.setItem("Data Entered", getValueof);
});

});
// part3==============================================/////////
