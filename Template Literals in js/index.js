console.log("Template literals");
const name = "awais";
const greeting = "Good morning";
console.log(greeting + " " + name);
let html;
html = "<h1>this is heading</h1>" + "<p>this is para</p>";

html = html.concat("love"," ", "awais", " ", "soni");
console.log(html);
html2 = "AWAISSONI";
console.log(html2.toLocaleLowerCase());
console.log(html.toLocaleUpperCase());

//

console.log(html2[0]);
console.log(html.lastIndexOf("<"));
console.log(html2.lastIndexOf("S"));
console.log(html2.charAt(1));
console.log(html.endsWith("para"));
console.log(html.endsWith("soni"));
console.log(html.includes("gfd"));
console.log(html.substring(1, 3));
console.log(html.slice(0, 4));

console.log("REPLACE FUNCTIONS");
console.log(html.replace("this", "AI"));
let fruits = "orange";
let fruits1 = "apple";
let myHtml = `Hello ${name}
<h1> this is heading </h1>
<p> you like ${fruits} and ${fruits1}

`;
document.body.innerHTML = myHtml;
