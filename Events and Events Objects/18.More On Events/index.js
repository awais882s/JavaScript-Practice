console.log("more on events");
let btn = document.getElementById("btn");
addEventListener("click", func1);
function func1(e) {
  console.log("thanks", e);
  e.preventDefault();
}
addEventListener("dblclick", func2);
function func2(e) {
  console.log("thanks its a double click", e);
  e.preventDefault();
}
addEventListener("mousedown", func3);
function func3(e) {
  console.log("thanks its a mouse down functions", e);
  e.preventDefault();
}