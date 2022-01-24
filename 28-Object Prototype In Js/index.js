console.log("Object Prototype In javascript");
// object  : object.prototype
let obj1 = {
  name: "awais",
  channel: "muhammad awais",
  adress: "Arifwala",
};
function obj(givenName) {
  this.name = givenName;
}
obj.prototype.getName = function () {
  return this.name;
};
obj.prototype.setName = function (newName) {
  return (this.name = newName);
};

let obj2 = new obj("Chasmato");
console.log(obj2);
