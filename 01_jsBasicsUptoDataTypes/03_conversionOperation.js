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

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Post-incrementing 'x' by 1 and assigning the original value to 'y'. Outputs: "x:4, y:3".

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Pre-incrementing 'a' by 1 and assigning the updated value to 'b'. Outputs: "a:4, b:4".
