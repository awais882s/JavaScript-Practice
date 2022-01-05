console.log("local and session storage");
let impArray = ["adrak", "pyaz", "bhindi"];
//  add key value pairs
localStorage.setItem("name", "awais");
localStorage.setItem("name2", "Lovers");
localStorage.setItem("sbzi", JSON.stringify(impArray));
// localStorage.clear(); clear the entire values
// retrieve the items from local storage

let name = localStorage.getItem("name");
console.log(name);
// clear particular key
localStorage.removeItem("name");

sbzi = JSON.parse(localStorage.getItem("sbzi"));
console.log(sbzi);
