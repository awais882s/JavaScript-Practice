console.log("Notes app");
//  if user adds a note , add it to the local storage
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addTxt.value = "";
  console.log(notesobj);
});
