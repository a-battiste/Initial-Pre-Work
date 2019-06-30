// I learned that you can use destructuring assignment to assign the contents of an array to a new array or variable. You can also use commas to skip to the desired index of an array.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
   [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
