// I learned that the let keyword is useful if you only want to declare a variable within the scope of a particular function or block, if var hasn't been declared globally. This prevents the variable from affecting other statements and blocks if it were set in the global scope.

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
