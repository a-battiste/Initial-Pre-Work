// I learned how to create a function that serves as a queue in JavaScript. In queue, new items can be added to the end of an array, and the first item is removed from the beginning of the array. 

function nextInLine(arr, item) {
  // Your code here

  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
