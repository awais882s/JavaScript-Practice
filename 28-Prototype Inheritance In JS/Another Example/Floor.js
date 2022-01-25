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

function cake(egg, bakingpowder, shitesugar, water, over) {
  Flour.call(this, egg, bakingpowder, whitesugar);
  this.water = water;
  this.over = oven;
}
