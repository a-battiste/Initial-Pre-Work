// I learned how to write consise object literal declarations with simple fields. Simple fields eliminate redundancy of using colons for declarations. 

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  ({name, age, gender });

  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
