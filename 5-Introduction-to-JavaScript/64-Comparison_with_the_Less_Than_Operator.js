// I learned that the less than operator compares two values to see if the number on the left is less than the number on the right. When it is less, it returns true. When it is not, it returns false. 

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
