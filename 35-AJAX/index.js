console.log("AJAX");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("You have Clicked the fetchBtn");
  // instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //   open the object
  //   xhr.open("GET", "awais.txt", true); for get request
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

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
  xhr.send();
  console.log("We are Done");
}
