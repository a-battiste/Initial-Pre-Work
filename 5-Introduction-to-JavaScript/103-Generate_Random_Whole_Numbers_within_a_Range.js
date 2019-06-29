/* I learned a formula that is used to generate random numbers between 2 specific numbers which is :
Math.floor(Math.random() * (max - min + 1)) + min */

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax -myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
