console.log("welcome to awais");
let element = document.createElement("li");
element.className = "mylist";
element.id = "mylist";
element.setAttribute("title", "my_love_and_lifeline");
element.innerHTML = "<b>We never leave our,s</b>";
console.log(element);
let li = document.querySelector("#list_one");
li.appendChild(element);
console.log(li);

// another way to add,s one
let lists = document.querySelector(".new");

let textNew = document.createTextNode("i am new nodes to add with");
lists.appendChild(textNew);

console.log(textNew);
// any others,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
console.log("new+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let heading = document.createTextNode("programming is the best practice");
heading.className = "heagings";
heading.id = "headings";
console.log(heading);
let life = document.querySelector(".life");
life.replaceWith(heading);
