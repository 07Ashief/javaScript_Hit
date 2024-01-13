let score = "hitesh";
// String variable 'score' is assigned the value "hitesh".
console.log(typeof score);
// Output: string

let valueInNumber = Number(score);
// 'Number()' converts the string "hitesh" to a number. Since the string is not a valid number, 'valueInNumber' becomes NaN (Not a Number).
console.log(typeof valueInNumber);
// Output: number

let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// 'Boolean()' converts the string "hitesh" to a boolean. Any non-empty string is treated as true, so 'booleanIsLoggedIn' becomes true.
console.log(booleanIsLoggedIn);
// Output: true

let someNumber = 33;
let stringNumber = String(someNumber);
// 'String()' converts the number 33 to a string. 'stringNumber' becomes the string "33".
console.log(typeof stringNumber);
// Output: string

let negValue = -value;
// Unary minus operator '-' negates the value of 'value'. If 'value' was 3, 'negValue' becomes -3.
console.log(negValue);
// Output: -3

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
// String concatenation using the '+' operator. 'str3' becomes "hello hitesh".
console.log(str3);
// Output: "hello hitesh"

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
// The variables 'num1', 'num2', and 'num3' are all assigned the value 4.
console.log(num1, num2, num3);
// Output: 4 4 4

let gameCounter = 100;
++gameCounter;
// Incrementing 'gameCounter' by 1 using the pre-increment operator '++'. 'gameCounter' becomes 101.
console.log(gameCounter);
// Output: 101

/** *******Increment Operator********** */

let x = 3;
const y = x++;
// Declaring a variable 'x' with the value 3, and a constant variable 'y' assigned the current value of 'x' (3) using post-increment.
// Post-increment ('x++') uses the current value of 'x' in the expression first, and then increments 'x' by 1.

console.log(`x:${x}, y:${y}`);
// Outputs the values of 'x' and 'y'. Expected output: "x:4, y:3"
// After the operation, 'x' is incremented to 4, while 'y' holds the original value of 'x' before the increment.

let a = 3;
const b = ++a;
// Declaring a variable 'a' with the value 3, and a constant variable 'b' assigned the updated value of 'a' (4) using pre-increment.
// Pre-increment ('++a') increments 'a' by 1 first, and then uses the updated value.

console.log(`a:${a}, b:${b}`);
// Outputs the values of 'a' and 'b'. Expected output: "a:4, b:4"
// Both 'a' and 'b' end up with the same value after the pre-increment operation.
