console.log("My personal information");

// constructor
function Information(name, city, province) {
  this.name = name;
  this.city = city;
  this.province = province;
}

function Display() {}

Display.prototype.add = function (information) {
  console.log("Adding UI");
  let tableBody = document.getElementById("tableBody");
  // 1st method
  // let uiString = ` <tr>
  //                   <td>${information.name}</td>
  //                   <td>${information.city}</td>
  //                   <td>${information.province}</td>
  //                 </tr>`;
  // tableBody.innerHTML = uiString;
  // 2nd method
  tableBody.innerHTML = `
  <tr>
                    <td>${information.name}</td>
                    <td>${information.city}</td>
                    <td>${information.province}</td>
                  </tr>`;
};
// implementation the clear methods
Display.prototype.clear = function () {
  let InformationForm = document.getElementById("InformationForm");
  InformationForm.reset();
};

// add submit event listeners on InformationForm

let InformationForm = document.getElementById("InformationForm");
InformationForm.addEventListener("submit", InformationFormSubmit);
function InformationFormSubmit(e) {
  let name = document.getElementById("Name").value;
  let city = document.getElementById("city").value;

  let punjab = document.getElementById("punjab");
  let sindh = document.getElementById("sindh");
  let kashmir = document.getElementById("kashmir");
  let province;
  if (punjab.checked) {
    province = punjab.value;
  } else if (sindh.checked) {
    province = sindh.value;
  } else if (kashmir.checked) {
    province = kashmir.value;
  }
  let information = new Information(name, city, province);
  console.log(information);
  let display = new Display();

  if (display.validate(information)) {
    display.add(information);
    display.clear();
    display.show("Success", "Your Information Has been Added");
  } else {
    // aleart error to the user
    display.show("danger", "Soory You Cannot add Empty Values");
  }
  console.log("Thanks for Submit Your Data");
  e.preventDefault();
}
