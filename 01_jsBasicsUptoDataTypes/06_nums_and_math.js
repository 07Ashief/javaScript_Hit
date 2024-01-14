const score = 400;
// Simple variable assignment
// console.log(score);

const balance = new Number(100);
console.log(balance);
// Outputs: [Number: 100]
// Creating a Number object using the 'new' keyword. Note: Generally, primitives are used instead of Number objects.

console.log(balance.toString().length);
// Outputs: 3
// Converting the Number object to a string and retrieving its length.

console.log(balance.toFixed(1));
// Outputs: "100.0"
// Rounding the Number object to one decimal place and converting to a string.

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));
// Outputs: "123.9"
// Representing the number with a specified precision.

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
// Outputs: "10,00,000"
// Formatting the number with commas based on the locale.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// Outputs: Math object containing mathematical functions.

console.log(Math.abs(-4));
// Outputs: 4
// Absolute value of a number.

console.log(Math.round(4.6));
// Outputs: 5
// Rounding a number to the nearest integer.

console.log(Math.ceil(4.2));
// Outputs: 5
// Rounding a number up to the nearest integer.

console.log(Math.floor(4.9));
// Outputs: 4
// Rounding a number down to the nearest integer.

console.log(Math.min(4, 3, 6, 8));
// Outputs: 3
// Finding the minimum value among the provided numbers.

console.log(Math.max(4, 3, 6, 8));
// Outputs: 8
// Finding the maximum value among the provided numbers.

console.log(Math.random());
// Outputs: A random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log((Math.random() * 10) + 1);
// Outputs: A random floating-point number between 1 and 11.

console.log(Math.floor(Math.random() * 10) + 1);
// Outputs: A random integer between 1 and 10.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Outputs: A random integer between 10 and 20.

