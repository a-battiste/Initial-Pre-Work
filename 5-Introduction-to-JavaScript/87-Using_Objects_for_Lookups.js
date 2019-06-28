// I learned how to create an object to look up values. Lookup objects are useful when there is a limited range of input data to choose from.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val] ;

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
