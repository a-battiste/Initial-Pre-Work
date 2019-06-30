// I learned that arrow functions are useful for creating functions that use other functions as conditions to process data. I also learned what the functions: .filter, .map, and .reduce, are used for. 

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(a => a > 0 && a % 1 == 0).map(a => a *a) ;

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
