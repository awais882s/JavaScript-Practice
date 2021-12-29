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
sel = document.querySelector('h1');
sel.style.color = "green"
console.log(sel);
