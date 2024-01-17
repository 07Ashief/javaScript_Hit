// Function to print individual letters in "Hitesh"
function sayMyName() {
    console.log("H");  // Output: H
    console.log("I");  // Output: I
    console.log("T");  // Output: T
    console.log("E");  // Output: E
    console.log("S");  // Output: S
    console.log("H");  // Output: H
}

sayMyName();

// Function to add two numbers and print the result
function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
    // The following line will never execute as the function has already returned.
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);  // Output: Result: 8

// Function with a default parameter and a return statement
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));  // Output: hitesh just logged in
console.log(loginUserMessage("hitesh"));  // Output: hitesh just logged in

// Function using rest parameter to collect multiple arguments into an array
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));  // Output: [500, 2000]

// Function to handle an object and print its properties
const user = {
    username: "hitesh",
    prices: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);  // Output: Username is hitesh and price is 199
handleObject({
    username: "sam",
    price: 399
});  // Output: Username is sam and price is 399

// Function to return the second value from an array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));  // Output: 400
console.log(returnSecondValue([200, 400, 500, 1000]));  // Output: 400
