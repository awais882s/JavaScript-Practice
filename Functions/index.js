// functions
console.log("Function in js");
let name1 = "skillF";
console.log(
  `Happy Birthday ${name1} The older I get, the more I realize that I am still a little younger than you! Happy birthday.`
);
// =====================================================
console.log("With functions=========================================:");
function greeting(name, thank = "Thanks You sir for wishings") {
  console.log(
    `Happy Birthday ${name} The older I get, the more I realize that I am still a little younger than you! Happy birthday.
    ${thank}`
  );
}
let name = "awais";
let name2 = "lovers g";
greeting(name, "Thanks a lot");
greeting(name2, "Thanks a lover");

const myObj = {
  name: "awais",
  game: function () {
    return "GTA VICE CITY";
  },
};
console.log(myObj.game());

arr = ["fruits", "vegetables", "furnitures"];
arr.forEach(function (element, index) {
  console.log(element, index);
});

var i = 234;
console.log(i);
function ui(name) {
  let i = 9;
  console.log(i);
  return `This is a ${name} ui`;
}
console.log(ui("awais"),i);
