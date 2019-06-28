// I learned that you can test objects to see if they have a specific property by using the .hasOwnProperty method, which returns a Boolean value. If the object has that property, it will return true. If not, it returns false. You can use an else if function return a phrase depending on the boolean value it returns.

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
  return myObj[checkProp]
} else {
  return "Not Found"
}
}
// Test your code by modifying these values
checkObj("gift");
