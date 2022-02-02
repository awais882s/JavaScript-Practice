console.log("Async and Sync");

setTimeout(() => {
  for (let index = 0; index < 100; index++) {
    const element = index;
    console.log(element);
    console.log("This is index number " + index);
  }
}, 10);
// for (let index = 0; index < 10000; index++) {
//   const element = index;
//   console.log(element);
//   console.log("This is index number " + index);
// }
console.log("Done Printing");
