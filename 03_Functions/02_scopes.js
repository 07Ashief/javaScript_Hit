/*
Scope and Variable Declaration:

- 'var' has function scope, and 'let' and 'const' have block scope.
- Variables declared with 'let' and 'const' are not hoisted to the top of their block.
- The order of function declarations matters; function declarations are hoisted.
- The code uses terms like "global scope," "block scope," and "function scope" to describe variable visibility.

Output Comments:
- Output comments are provided for each line of code to explain the expected result.

*/

var c = 300;  // Global scope (old way of declaring variables)
let a = 300;  // Global scope

if (true) {
    let a = 10;  // Block scope (local to the if block)
    const b = 20;  // Block scope (local to the if block)
    console.log("INNER: ", a);  // Output: INNER: 10
}

console.log(a);  // Output: 300 (refers to the global 'a' variable)
console.log(b);  // ReferenceError: b is not defined (b is local to the if block)
console.log(c);  // Output: 300 (refers to the global 'c' variable)

function one() {
    const username = "hitesh";  // Function scope (local to the 'one' function)

    function two() {
        const website = "youtube";  // Function scope (local to the 'two' function)
        console.log(username);  // Output: hitesh
    }

    console.log(website);  // ReferenceError: website is not defined (website is local to the 'two' function)
    two();
}

one();

if (true) {
    const username = "hitesh";  // Block scope (local to the if block)
    if (username === "hitesh") {
        const website = " youtube";  // Block scope (local to the inner if block)
        console.log(username + website);  // Output: hitesh youtube
    }
    console.log(website);  // ReferenceError: website is not defined (website is local to the inner if block)
}

console.log(username);  // ReferenceError: username is not defined (username is local to the if block)

// ++++++++++++++++++ Interesting ++++++++++++++++++

console.log(addone(5));  // Output: 6

function addone(num) {
    return num + 1;
}

addTwo(5);  // TypeError: addTwo is not a function (addTwo is declared using const after it is called)
const addTwo = function(num) {
    return num + 2;
}
