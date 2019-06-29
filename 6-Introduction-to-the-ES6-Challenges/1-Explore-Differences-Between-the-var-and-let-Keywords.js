// I learned that the let keyword only allows a varable with that name to be declared once. This prevents a variable from being overridden if it is declared again later. Also, "use-strict" catches common coding mistakes and unsafe actions.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
