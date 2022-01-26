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
