"use strict"; 
// The "use strict" directive makes the code follow a stricter set of rules, catching common coding mistakes and preventing the use of certain error-prone features.

// alert(3 + 3); 
// Alerts are not supported in Node.js, and this line is commented out since it's meant for a browser environment.

console.log(3 + 3);
// Using multiple lines for readability. The result (6) will be printed to the console.

console.log("Hitesh");

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;
// Declaring variables using 'let'. 'name' is a string, 'age' is a number, 'isLoggedIn' is a boolean, and 'state' is undefined.

// Data types in JavaScript:
// - number: Represents numbers (integer or floating-point).
// - bigint: Represents integers of arbitrary precision.
// - string: Represents text in double or single quotes.
// - boolean: Represents true or false.
// - null: Represents a standalone value of null.
// - undefined: Represents an uninitialized variable.
// - symbol: Represents a unique value.

console.log(typeof undefined); 
// Outputs the data type of 'undefined', which is "undefined".

console.log(typeof null); 
// Outputs the data type of 'null', which is "object".
// Note: This is a known quirk in JavaScript. 'null' is of type "object" in the typeof operator, but it is actually a standalone value.
