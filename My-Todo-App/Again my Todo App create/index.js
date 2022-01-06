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
}
