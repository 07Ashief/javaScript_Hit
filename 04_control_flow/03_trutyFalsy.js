// Conditional Statements and Operators in JavaScript

const userEmail = [];

// Checking for presence of user email
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Checking if array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Checking if object is empty
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator
let val1;
val1 = 5 ?? 10;            // Output: 5
val1 = null ?? 10;         // Output: 10
val1 = undefined ?? 15;    // Output: 15
val1 = null ?? 10 ?? 20;    // Output: 10

console.log(val1);

// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

/**
 Notes:
- In JavaScript, values are evaluated as either truthy or falsy in conditional statements.
- Falsy values include false, 0, -0, BigInt 0n, "", null, undefined, and NaN.
- Truthy values include non-empty strings, numbers other than 0, arrays, objects, and functions.
- Checking the length of an array or the number of keys in an object can be used to determine emptiness.
- Nullish Coalescing Operator (??) returns the right-hand operand when the left-hand operand is null or undefined.
- Ternary Operator (? :) is a concise way of writing conditional statements.

Code Execution:
- The output depends on the values being evaluated in each condition.


 */
