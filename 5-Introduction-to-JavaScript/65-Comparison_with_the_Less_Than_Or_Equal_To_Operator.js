// I learned that the less than or equal to operator, <=, checks if the number on the left is less than or equal to the number on the right. If it is, it returns true, and if it is not, it returns false.

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);
