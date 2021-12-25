console.log("loops in js");
// General loops for, while, do while
// let a = 34;
// a += 1;
// a++;
// console.log("value of a is :", a);

for (let i = 0; i < 100; i++) {
  console.log(i);
}


// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);

// }
// ========================================================================
console.log("For loops in========================== js");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function (index , index , array) {
  console.log(index,index,array);
});
let obj = {
    name:"awais",
    age:14,
    type:"hacker",
    os : "window",
}
console.log("object in js======================================================");
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}