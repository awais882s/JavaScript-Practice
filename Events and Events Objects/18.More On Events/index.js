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

// on dummy divs
document.querySelector(".no").addEventListener("mouseenter", function () {
  console.log("you entered nothings ");
});

document.querySelector(".no").addEventListener("mouseleave", function () {
  console.log("you exits no");
});

// triggered the mouse
document
  .querySelector(".container")
  .addEventListener("mousemove", function (e) {
    console.log("you have triggered the mouse");
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetY},154)`;
  });
