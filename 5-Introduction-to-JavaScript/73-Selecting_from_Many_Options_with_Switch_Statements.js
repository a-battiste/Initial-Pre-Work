// I learned how to create a switch statement, which is used when there are many options to choose from. These options are called cases, and a switch function executes a case statement when the case value matches until the break is encountered.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
