console.log("Arrow Function");
// Arrow functions

// create a normal function
// function awais() {
//   console.log("This is the best perosn ever");
// }

// awais();

// convert into arrow function
const awais1 = () => {
  console.log("THis is my arrow function");
};
awais1();

// const greet = function () {
//   return " Good Morning ";
// };

// console.log(greet());

// one liners do not require/braces
// one line will automatically return
const greet = () => "good morning awais ";
console.log(greet());

// object
const software = () => ({
  name: "awais",
});

console.log(software());

// get an input 1st way

const greeting = (name) => "good  morning " + name;

console.log(greeting("awais"));

// get an input 2nd way

const greeting1 = (name, ending) => "good  morning " + name;

console.log(greeting1("greeting1 " + "goodbye"));
