const list = document.getElementById("list");

function addTodo() {
  var todo_item = document.getElementById("todo-item");
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_item.value);
  li.appendChild(liText);
  //   console.log(todo_item.value);
  list.appendChild(li);

  todo_item.value = "";
  console.log(li);
}
