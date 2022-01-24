console.log("Object Literals, Constructors");
// object literals for creating objects
let car = {
  name: "Corolla",
  topSpeed: 89,
  run: function () {
    console.log("car is running");
  },
};
console.log(car);
// we have already seen constructor like this
// new Date();

// creating a constructor for cars
function generalCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = parseInt(givenSpeed);
  this.run = function () {
    console.log(`${this.name}is running`);
  };
  this.analyze = function () {
    console.log(
      `This car is slower by ${200 - this.topSpeed}Km/H than AutoCar`
    );
  };
}
car_1 = new generalCar("Nissan", "180Km");
car_2 = new generalCar("AutoCar", "200Km");

console.log(car_1);
console.log(car_2);
