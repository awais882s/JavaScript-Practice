console.log("Fetch Api");
// button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

function getData() {
  url = awais.txt;
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then(() => {
      console.log(data);
    });
}
