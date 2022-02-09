console.log("Fetch Api");
// button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// function getData() {
//   console.log("Started getData");
//   url = "awais.txt";
//   fetch(url)
//     .then((response) => {
//       console.log("inside first then");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("inside second then");
//       console.log(data);
//     });
// }

function getData() {
  console.log("Started getData");
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      console.log("inside first then");
      return response.json();
    })
    .then((data) => {
      console.log("inside second then");
      console.log(data);
    });
}

// console.log("Before running get Data");
// getData();
// console.log("After running get Data");

function postData() {
  // console.log("Started getData");
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = { name: "test", salary: "123", age: "23" };
  params = {
    method: "post",

    Headers: {
      "content-type": "application/json",
    },
    body: data,
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
postData();
