// type conversion and type coercion
console.log("Welcome to conversion");
let myVar;
myVar = String(34);
console.log(myVar, typeof myVar);
let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);
const date = String(new Date());
console.log(date, typeof date);
// array
const arr = String([1, 2, 3, 4, 5]);
console.log(arr, arr.length, typeof arr);
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArr, myArr.length, typeof myArr);
const myArr1 = String([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(myArr1, myArr1.length, typeof myArr1);
const i = 24;
console.log(i.toString());

let stri = Number("3456");
stri = Number("3456d");
stri = Number(false);
stri = String([1,2,3,,4,5,6,7])
console.log(stri, typeof stri);
