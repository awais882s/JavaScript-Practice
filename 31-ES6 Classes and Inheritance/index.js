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
}

awais = new Employee("awais", 50, "Division");
console.log(awais);

