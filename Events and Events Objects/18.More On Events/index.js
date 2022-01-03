console.log("more on events");
let btn = document.getElementById("btn");
addEventListener("click", func1);
function func1(e) {
  console.log("thanks", e);
  e.preventDefault();
}
