console.log("Welcome to lectures if and else");
const age = 45;
if (age != 19) {
  console.log("Age is 19");
}
if (age !== 65) {
  console.log("age is not 65 ");
} else {
  console.log("Age is not 19");
}

const vari = 65;
if (typeof vari !== "undefined") {
  console.log("vari is defined");
} else {
  console.log("vari is not defined");
}

const doesDrive = true;
if (doesDrive || age > 18) {
  console.log("You can drive");
} else {
  console.log("you cannot drive");
}
// ternary operator
console.log(age === 45 ? "age is 45" : "age is not 45");
