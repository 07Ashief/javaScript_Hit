// Conditional Statements in JavaScript

// Single Condition (if)
const isUserLoggedIn = true;
const temperature = 41;

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute"); // Output: "Execute" (regardless of the temperature condition)

// Comparison Operators: <, >, <=, >=, ==, !=, ===, !==

// Single Condition with Block
const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`); // Output: "User power: fly"
}

// console.log(`User power: ${power}`); // ReferenceError: power is not defined

// Single Condition with Single Statement
const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2"); // Output: "test" "test2"

// Multiple Conditions (if-else if-else)
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

// Logical Operators: && (AND), || (OR), ! (NOT)

// Combined Conditions
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND Operator
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course"); // Output: (No output due to false condition)
}

// OR Operator
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // Output: "User logged in" (as one condition is true)
}

/**
 Notes:
- Conditional statements are used to make decisions in code based on certain conditions.
- The 'if' statement is used to execute a block of code if a specified condition is true; otherwise, the 'else' statement is executed.

Comparison Operators:
- <, >, <=, >=, ==, !=, ===, !== are used for comparisons.

Block Scope:
- Variables declared with let or const have block scope, meaning they are only accessible within the block where they are defined.

Logical Operators:
- && (AND), || (OR), ! (NOT) are used to combine conditions.

Code Execution:
- The output depends on the values of variables and conditions. For each case, the code comments indicate the expected output.

 */