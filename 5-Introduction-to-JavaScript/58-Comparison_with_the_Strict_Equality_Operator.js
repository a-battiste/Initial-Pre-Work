// I learned that the strict equality operator (===) compares values like the equality operator but does not perform type coercion. 

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
