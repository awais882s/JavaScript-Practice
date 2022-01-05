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

  //   console.log(todo_item.value);
  list.appendChild(li);

  todo_item.value = "";

  console.log(li);
}
function deleteItem(e) {
  console.log(e);
  
  
}