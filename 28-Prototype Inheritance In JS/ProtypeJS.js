console.log("Prototype Inheritance In JavaScrip");
const proto = {
  slogan: function () {
    return `this company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};
// 1st methods to create prototype
const awais = Object.create(proto);

awais.name = "awais";
awais.role = "programmer";
awais.changeName("Awais882s");

// 2nd way to create prototype
// const awais = Object.create(proto, {
//   name: { value: "awais22" },
//   role: { value: "lover and Developers" },
// });

console.log(awais);

// ==========================================================================

// Employe constructor
function Employee(name, salary, expr) {
  this.name = name;
  this.salary = salary;
  this.expr = expr;
}

// slogan

Employee.prototype.slogan = function () {
  return `this company is the best. regards ${this.name}`;
};

// create objects

let awaisObj = new Employee("awais", 34000, "3years");
console.log(awaisObj.slogan());

// Programmer

function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}

// Inherit the prototype

Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.consstructor = Programmer;


let Chasmato = new Programmer("chasmato", "10", 3, "Javascript");
console.log(Chasmato);
