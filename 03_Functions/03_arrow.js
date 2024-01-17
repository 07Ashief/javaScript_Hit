/*
Arrow Functions and 'this' Context:

- Arrow functions have a concise syntax and do not bind their own 'this' value.
- Arrow functions do not have their own 'this', so they inherit 'this' from the enclosing scope.
- Regular functions have their own 'this' context.

Output Comments:
- Output comments are provided for each line of code to explain the expected result.

*/

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage();  // Output: "hitesh, welcome to the website" and the 'user' object

user.username = "sam";
user.welcomeMessage();  // Output: "sam, welcome to the website" and the updated 'user' object

console.log(this);  // Output: The global 'this' object

function chai() {
    let username = "hitesh";
    console.log(this.username);  // Output: undefined (no 'username' property in the global 'this' object)
}

chai();

const chai = function() {
    let username = "hitesh";
    console.log(this.username);  // Output: undefined (no 'username' property in the global 'this' object)
}

const chai = () => {
    let username = "hitesh";
    console.log(this);  // Output: The global 'this' object
}

chai();
const addTwo = (num1, num2) => num1 + num2;  // Arrow function with implicit return
/*
const addTwo = (num1, num2) => (num1 + num2);  // Arrow function with explicit return
const addTwo = (num1, num2) => ({ username: "hitesh" });  // Arrow function returning an object

console.log(addTwo(3, 4));  // Output: 7

const myArray = [2, 5, 3, 7, 8];

myArray.forEach();  // This line would result in an error since forEach() requires a callback function.

*/
