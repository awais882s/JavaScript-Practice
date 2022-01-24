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
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name}is running`);
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("AutoCar", "200km");
console.log(car1);
console.log(car2);
