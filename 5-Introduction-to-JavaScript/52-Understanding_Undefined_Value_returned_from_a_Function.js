// I learned that a function does not have to have a return statement, but if it doesn't then the returned value from the function will be undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
