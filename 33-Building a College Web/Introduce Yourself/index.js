console.log("My personal information");

// constructor
function Information(name, city, province) {
  this.name = name;
  this.city = city;
  this.province = province;
}

// add submit event listeners on InformationForm

let InformationForm = document.getElementById("InformationForm");
InformationForm.addEventListener("submit", InformationFormSubmit);
function InformationFormSubmit(e) {
  let name = document.getElementById("name");
  let city = document.getElementById("city");

  let punjab = document.getElementById("punjab");
  let sindh = document.getElementById("sindh");
  let kashmir = document.getElementById("kashmir");
  let province;
  if (punjab.checked) {
    province = punjab.value;
  }
  //   console.log("Thanks for Submit Your Data");
  e.preventDefault();
}
