console.log("Welcome To DOM,s Selectors");
a = document.all;
console.log(a);

// elements selectors types
//  1.multi elements selectors
//  2.Single elements selectors

let element = document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
element.innerText = "Awais is personality man,s";
element.innerHTML = "<h1> Awais alone </h1>";
console.log(element.innerHTML);

let sel = document.querySelector("#myfirst");
sel = document.querySelector(".child");
sel = document.querySelector("h1");
sel.style.color = "green";
console.log(sel);

// multi elements selectors

let elems = document.getElementsByClassName("child");
elems = document.getElementsByClassName("container");
console.log(elems);
Array.from(elems).forEach((element) => {
  console.log(element);
  element.style.color = "blue"
});
console.log(elems[0].getElementsByClassName("child"));
