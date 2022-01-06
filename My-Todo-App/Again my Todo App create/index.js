console.log("my TODO APP CREATE");

// here we get list from html to js
let list = document.getElementById("list");

// add todo text functionss
function addTodo() {
  let input = document.getElementById("todo_input");
  let li = document.createElement("li");
  let liText = document.createTextNode(todo_input.value);
  li.appendChild(liText);
  // for empty input tags

  if (todo_input.value == "") {
    alert("Cannot add empty values");
  } else {
    //   create delete buttons
    todo_input.value = "";
    list.appendChild(li);

    let delbtn = document.createElement("button");
    let delbtn_Text = document.createTextNode("Delete Todo");
    delbtn.setAttribute("class", "deletebtn");
    delbtn.setAttribute("onclick", "delItem(this)");
    //   console.log(delbtn);
    delbtn.appendChild(delbtn_Text);
    li.appendChild(delbtn);
    //   create edit Buttons
    let editbtn = document.createElement("button");
    let edit_text = document.createTextNode("Edit Todo");
    editbtn.setAttribute("onclick","editbutton(this)");
    editbtn.appendChild(edit_text);
    li.appendChild(editbtn);
  }
}
//   to delte items
function delItem(e) {
  e.parentNode.remove();
  // console.log(e);
}
function deleteAll() {
  list.innerHTML = "";
}
function editbutton(e) {
   let value = e.parentNode.firstChild.nodeValue ;
  let editvalue  = prompt("Enter Edit Value",value)
  e.parentNode.firstChild.nodeValue = editvalue;
  console.log(e.parentNode.firstChild.nodeValue);
  
}