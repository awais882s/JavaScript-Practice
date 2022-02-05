console.log("Promises");

// Promise : Best video on promise
// - resolve
// -reject
// -pending

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function : Your promise is resolved");
        resolve();
      } else {
        console.log(" Function : Your promise is reject");
        reject("soory not fulfilled");
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    console.log(" Awais Thanks for resolving");
  })
  .catch(function (error) {
    console.log("Awais : very bad bro " + error);
  });
