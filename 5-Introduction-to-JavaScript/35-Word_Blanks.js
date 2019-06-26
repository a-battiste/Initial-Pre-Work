// I learned how to concatenate strings with variables as word blanks. 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
result = "I " + myAdverb + " " + myVerb + " to the " + myAdjective + " " + myNoun;
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
