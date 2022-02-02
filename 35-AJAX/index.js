console.log("AJAX");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("You have Clicked the fetchBtn");
  // instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //   open the object
  //   xhr.open("GET", "awais.txt", true); for get request
  //   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  //   Use this for POST request
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("content-type", "application/x-www-form-urlencoded");

  //   what to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  //   xhr.onreadystatechange = function () {
  //     console.log("ready state is", xhr.readyState);
  //   };

  //   what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error ocurred");
    }
  };
  //   send the request
  params = "name = test&salary=123&age=23";
  xhr.send(params);
  console.log("We are Done");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);
function popHandler(params) {
  console.log("You have Clicked the pop Handler");
  // instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //   open the object
  //   xhr.open("GET", "awais.txt", true); for get request
  xhr.open("GET", "https://dummyjson.com/products", true);

  //   xhr.onreadystatechange = function () {
  //     console.log("ready state is", xhr.readyState);
  //   };

  //   what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>${obj[key].name}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error ocurred");
    }
  };
  //   send the request
  xhr.send();
  console.log("We are Done fetching Employees!");
}
