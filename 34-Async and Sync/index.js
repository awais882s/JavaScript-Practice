console.log("Async and Sync");

setTimeout(() => {
  for (let index = 0; index < 100; index++) {
    const element = index;
    console.log(element);
    console.log("This is index number " + index);
  }
}, 100);

console.log("Done Printing");
