console.log("AJAX");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("You have Clicked the fetchBtn");
  // instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //   open the object
  xhr.open("GET", "harry.txt", true);

  //   what to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  //   what to do when response is ready
  xhr.onload = function () {
    console.log(this.responseText);
  };
}
