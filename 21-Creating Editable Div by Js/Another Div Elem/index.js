console.log("welcome my div ");
// part1========================================================///////

let createElem = document.createElement("div");
createElem.id = "createElem";
createElem.innerHTML = `<h2>Submit text to local storage by clicking on the Text:</h2>`;
document.body.appendChild(createElem);
console.log(createElem);