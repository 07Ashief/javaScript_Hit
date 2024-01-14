const name = "hitesh";
const repoCount = 50;

// Concatenation using string interpolation
// console.log(name + repoCount + " Value");

// String interpolation using template literals
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Outputs: "Hello my name is hitesh and my repo count is 50"

const gameName = new String('hitesh-hc-com');

// Accessing individual characters and checking prototype
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// Getting string length and converting to uppercase
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// Accessing characters and finding index
console.log(gameName.charAt(2));
// Outputs: "t"
console.log(gameName.indexOf('t'));
// Outputs: 2

// Extracting substrings using substring and slice
const newString = gameName.substring(0, 4);
console.log(newString);
// Outputs: "hite"

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);
// Outputs: "hitesh"

// Trimming leading and trailing whitespaces
const newStringOne = "   hitesh    ";
console.log(newStringOne);
// Outputs: "   hitesh    "
console.log(newStringOne.trim());
// Outputs: "hitesh"

// Replacing a specific substring
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));
// Outputs: "https://hitesh.com/hitesh-choudhary"

// Checking if a string includes a substring
console.log(url.includes('sundar'));
// Outputs: false

// Splitting a string into an array based on a delimiter
console.log(gameName.split('-'));
// Outputs: [ 'hitesh', 'hc', 'com' ]
