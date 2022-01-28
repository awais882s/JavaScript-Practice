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

  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  display.add(book);
  display.clear();
  e.preventDefault();
}
