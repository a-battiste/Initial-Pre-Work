// I learned that getters are functions that relays information from an object to the user, while setters are functions that receive information from the user and stores it in the object's private variable.

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  //  getter
  get temperature() {
    return (this._fahrenheit - 32) * 5/9;
  }
  //setter
  set temperature(celsius) {
    (this._fahrenheit) = celsius * 9 / 5 + 32;
  }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
