console.log("XHR Request(HTTP REQUEST)");

let btn = document.getElementById("btn");
btn.addEventListener("click", primaryBtn);
function primaryBtn() {
  console.log("You have clicked the Primary Btn");
  //   intiate and xhr open
  const xhr = new XMLHttpRequest();
  //   xhr.open("GET", "xhr.txt", true);
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);

  xhr.onprogress = function () {
    console.log("Your Progress is Running");
  };
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };
  xhr.send();
  console.log("We are DONE!");
}
// another btn
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", secondaryBtn);
function secondaryBtn() {
  console.log("You have created the secondary Btn");
  const xhr = new XMLHttpRequest();
  //   xhr.open("GET", "xhr.txt", true);
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.onprogress = function () {
    console.log("Your secondary btn is loaded");
  };
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Your file is missings");
    }
  };
  xhr.send();
  console.log("your http request for secondary btn is done");
}
