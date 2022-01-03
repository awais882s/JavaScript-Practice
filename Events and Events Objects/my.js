console.log("buttons");
document
  .getElementById("btn-submit")
  .addEventListener("mouseover", function (e) {
    console.log("you have click the submit buttons");
    // alert("this is buttons");
    // let name = prompt("enter your lover name");
    // console.log(name);
    // location.href = "https://muhammad-awais-house.business.site/";
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);
    // variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    console.log(variable);
  });
