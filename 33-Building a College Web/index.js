console.log("Building a College Library Website ");

// constructor

function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display constructor

function Display() {}

//  add methods to display prototype

//  add submit event listeners to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  e.preventDefault();
  console.log("you have submitted library form");
}
