// I learned that the objects assigned to a const variable are still mutable, which means that they can still be manipulated. It's only the variable itself that cannot be redefined.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // change code above this line
}
editInPlace();
