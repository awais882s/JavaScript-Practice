console.log("Arrays and Objects");
let marks = [23, 41, 45, 68, 89, 54, 22];
const fruits = ["apple", "mango", "pineapple", "bannana"];
const mixed = ["str", 89, [34, 35]];

const arr = new Array(23, 123, "orange");
console.log(arr);
console.log(mixed);
console.log(marks);
console.log(fruits[0]);
console.log(marks.includes("mango"));
console.log(arr.length);
console.log(Array.isArray(arr));
arr[0] = "awais";
console.log(arr);
let arrelement = arr[0];
console.log("Element:", arrelement);
console.log(marks.indexOf(23));

let val = marks.indexOf(45);
console.log(val);

// mutating or modifying arrays
marks.push(100);
console.log(marks);
marks.unshift(10009);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(1, 2);
console.log(marks);
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
fruits.push("Grapes", "blueberry");
console.log(fruits);
let frt1 = fruits.slice(1, 3);
console.log(frt1);
console.log(marks);
marks.reverse();
console.log(marks);
let marks2 = String([1, 2, 3, 45, 6, "awais"]);
marks = marks.concat(marks2);
console.log(marks);

//++++++++++++++++++++++++++++++++++++++++++++++++=========================================

console.log("Objects in js");

let myObj = {
  name: "awais",
  rollNo: 15424,
  Section: "A",
  Numbers: [1, 2, 34, 5],
};

console.log(myObj.name);
console.log(myObj.Numbers);
