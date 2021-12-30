console.log("create remove and replacing");
let element = document.createElement("li");
//  add a class names
element.className = "childul";
element.id = "created li";
element.setAttribute("title", "my love");
element.innerHTML = "<b>hello this created by awais</b>";
let ul = document.querySelector("ul.this");
ul.appendChild(element);
console.log(ul);
console.log(element);
// another way to add text by using create textnodes
let text = document.createTextNode("i am text nodes");
ul.appendChild(text);

let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("this is created node for elem2");
elem2.appendChild(tnode);
console.log(elem2);

element.replaceWith(elem2);
let myul = document.getElementById("myul");
myul.replaceWith(element, document.getElementById("fui"));
myul.remove(document.getElementById("lui"));
let pr = elem2.hasAttribute("class");
elem2.removeAttribute("id");
elem2.setAttribute("title", "myelem2title");
console.log(elem2, pr);
