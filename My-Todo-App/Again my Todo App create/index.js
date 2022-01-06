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
  todo_input.value = "";
  list.appendChild(li);

  //   create delete buttons

  let delbtn = document.createElement("button");
  let delbtn_Text = document.createTextNode("Delete Todo");
  delbtn.setAttribute("class", "deletebtn");
  delbtn.setAttribute("onclick", "delItem(this)");
  //   console.log(delbtn);
  delbtn.appendChild(delbtn_Text);
  li.appendChild(delbtn);
}

//   to delte items
function delItem(e) {
  e.parentNode.remove();
  // console.log(e);
}
function deleteAll() {
  list.innerHTML = "";
}
