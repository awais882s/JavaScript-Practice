console.log("ES6 Classes and Inheritance");

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `i am ${this.name} this company is best`;
  }
  joiningYear() {
    return 2020 - this.experience;
  }
  static add(a, b) {
    return a + b;
  }
}

class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language, github) {
    super(givenName, givenExperience, givenDivision);
    this.language = language;
    this.github = github;
  }
  favLang() {
    if (this.favLang == "python") {
      return "Python";
    } else {
      return "Javascript";
    }
  }
  static multiply(a, b) {
    return a * b;
  }
}

awais = new Employee("awais", 56, "Division");
console.log(awais.joiningYear());

console.log(Employee.add(34, 5));

awais = new Programmer("Chasmato", 3, "Lays", "Go", "AWAIS882s");
console.log(awais);
console.log(awais.favLang());
console.log(Programmer.multiply(5, 7));
console.log(awais.favLang());

// advanced Es6 features

let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

// another exampl
let lang = ["python", "java", "c++"];
let [x, y, z] = lang;
console.log(x, y, z);
console.log(x);

//Object Destructuring
let person = { name: "Peter", age: 28 };
let { name, age } = person; // Object destructuring assignment
console.log(name, age);
// any other example

let frnd = { name1:"my chasmato", age1: 21 };
let { name1, age1 } = frnd;
console.log(name1);

//  Enhanced Object Literals

function getMobile(manufacturer, model, year) {
    return {
       manufacturer,
       model,
       year
    }
 }
 getMobile("Samsung", "Galaxy", "2020");
//   Promises

 var asyncCall =  new Promise((resolve, reject) => {
    // do something
    resolve();
 }).then(()=> {   
    console.log('DON!');
 })