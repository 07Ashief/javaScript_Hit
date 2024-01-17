/*
Immediately Invoked Function Expressions (IIFE):

- IIFE is a function expression that is executed immediately after it's created.
- It helps to create a private scope, avoiding variable hoisting and pollution of the global scope.

Output Comments:
- Output comments are provided for each line of code to explain the expected result.

*/

(function chai(){
    // Named IIFE (Immediately Invoked Function Expression)
    console.log(`DB CONNECTED`);
})();

((name) => {
    // IIFE with arrow function and parameter
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');

/*
Output:
- "DB CONNECTED" (output of the first IIFE)
- "DB CONNECTED TWO hitesh" (output of the second IIFE)
*/

