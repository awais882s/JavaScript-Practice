console.log("Fetch Api");
// button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

function getData() {
  console.log("Started getData");
  url = "awais.txt";
  fetch(url)
    .then((response) => {
      console.log("inside first then");
      return response.text();
    })
    .then((data) => {
      console.log("inside first then");
      console.log(data);
    });
}
console.log("Before running get Data");
getData();
console.log("After running get Data");
