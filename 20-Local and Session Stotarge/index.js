console.log("local and session storage");
localStorage.setItem("name", "awais");
localStorage.setItem("name", "Lovers");
localStorage.clear();
let name = localStorage.getItem("name");
console.log(name);
