// I learned how to use the class keyword to create a constructor function. The class keyword declares a new function and a constructor is added so that a new object is created when 'new' is used.

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(name) {
  this.name = name;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
