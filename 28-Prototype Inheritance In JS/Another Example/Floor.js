console.log("Flour");
// Floor Constructor
function Flour(egg, bakingpowder, whitesugar) {
  this.egg = egg;
  this.bakingpowder = bakingpowder;
  this.whitesugar = whitesugar;
}
// slogan
Flour.prototype.slogan = function () {
  return `This cake is best`;
};

// create an object from this constructor now

let make = new Flour(2, 500, 7);
console.log(make.slogan());

// cake

function cake(egg, bakingpowder, whitesugar, water, oven) {
  Flour.call(this, egg, bakingpowder, whitesugar);
  this.water = water;
  this.over = oven;
}

// Manually set the constructor

cake.prototype.constructor = cake;

let cook = new cake(4, 500, 700, 500, 4);
console.log(cook);
