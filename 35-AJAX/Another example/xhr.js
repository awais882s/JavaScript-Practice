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