console.log("Traversing the DOM,s");
let cont = document.querySelector(".no");
cont = document.querySelector(".container");

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);
// console.log(cont.childNodes);
// console.log(cont.children);

/*
node type lists
1.Element
2.Attributes
3.Text Node
8.Comment
9.document
10.DocType */

let container = document.querySelector("div.container");
console.log(container.children[1].children[0].children);
console.log(container.firstElementChild);
console.log(container.childNodes);
console.log(container.lastChild);
console.log(container.childElementCount);

// another
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
