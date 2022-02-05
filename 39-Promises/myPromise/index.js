console.log("My promise");

const myPromise = new Promise(function (resolve, reject) {
  let x = 10;
  if (x == 20) {
    console.log("Ok");
    resolve();
  } else {
    console.log("error");
    reject();
  }
});

myPromise
  .then(function () {
    console.log("Promise is resolved");
  })
  .catch(function () {
    console.log("Promise is reject");
  });
