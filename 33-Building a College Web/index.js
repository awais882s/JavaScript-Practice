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
  console.log("you have submitted library form");
  let book = new Book(name, author, type);
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  }

  // let type = document.getElementById("").value;
  e.preventDefault();
}
