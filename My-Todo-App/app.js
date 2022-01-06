const list = document.getElementById("list");

function addTodo() {
  var todo_item = document.getElementById("todo-item");

  //  create li tags with text node
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_item.value);
  li.appendChild(liText);

  // create delete buttons
  var delbtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delbtn.setAttribute("class", "btn");
  delbtn.setAttribute("onclick", "deleteItem(this)");
  delbtn.appendChild(delText);
  li.appendChild(delbtn);

  // create edit button
  var editbtn = document.createElement("button");
  var editText = document.createTextNode("Edit Button");
  editbtn.setAttribute("class", "btn");
  editbtn.appendChild(editText);
  editbtn.setAttribute("onclick", "editItem(this)");
  li.appendChild(editbtn);

  //   console.log(todo_item.value);
  list.appendChild(li);

  todo_item.value = "";

  console.log(li);
}
function deleteItem(e) {
  e.parentNode.remove();
  // console.log(e.parentNode);
}
function deleteAll() {
  list.innerHTML = "";
}
function editItem(e) {
  var val = e.parentNode.firstChild.nodeValue;
  var editValue = prompt("Enter Edit Value", val);
  e.parentNode.firstChild.nodeValue = editValue;
  // e.parentNode.firstChild.nodeValue = "awais iqbal";
  // console.log(e.parentNode.firstChild);
}

// links
// https://youtu.be/wmqXazMJH0o    youtube links