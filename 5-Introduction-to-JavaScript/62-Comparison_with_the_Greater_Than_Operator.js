// I learned that the greater than operator compares two values to see if the number on the left is greater than the number on the right. When it is greater, it returns true. When it is not, it returns false. 

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
