// I learned that bracket notation is also used to access object properties through another variable, and when a property's name is collected dynamically during a program's execution.

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
