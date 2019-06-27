// I learned that a variable with local scope is not visible outside of that function. That means that that variable will not affect code outside of that particular function.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 21
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
