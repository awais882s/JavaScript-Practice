console.log("welcome to Events and Events objects");
document.getElementById("heading").addEventListener("click", function (e) {
  console.log("you have click the headings awais");
  //   alert("you open this website");
  //   prompt("you open this website muhammad awais house");
  //   location.href = "https://muhammad-awais-house.business.site/";
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);
  //   variable = e.target.id;
  variable = e.offsetX;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
});

// on mouse over functions==================================
document.getElementById("heading").addEventListener("mouseover", function (e) {
  console.log("you have click the headings awais");
  //   alert("you open this website");
  //   prompt("you open this website muhammad awais house");
  //   location.href = "https://muhammad-awais-house.business.site/";
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);
  //   variable = e.target.id;
  variable = e.offsetX;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
});
