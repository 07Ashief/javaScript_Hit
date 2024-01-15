// Array

// An array is a data structure that stores a collection of elements, where each element is identified by an index or a key.

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);
// Outputs: 1
// Accessing an element at index 1 in the array 'myArr'.

// Array Methods

myArr.push(6);
// Adds the element 6 to the end of the array.
myArr.push(7);
// Adds the element 7 to the end of the array.
myArr.pop();
// Removes the last element from the array.

myArr.unshift(9);
// Adds the element 9 to the beginning of the array.
myArr.shift();
// Removes the first element from the array.

console.log(myArr.includes(9));
// Outputs: false
// Checks if the array includes the value 9.

console.log(myArr.indexOf(3));
// Outputs: 2
// Finds the index of the first occurrence of the value 3 in the array.

const newArr = myArr.join();
// Joins all elements of the array into a single string with a default comma separator.

console.log(myArr);
// Outputs: [ 1, 2, 3, 4, 5, 6 ]
console.log(newArr);
// Outputs: "1,2,3,4,5,6"
// The original array remains unchanged.

// Slice and Splice

console.log("A ", myArr);
// Outputs: A [ 1, 2, 3, 4, 5, 6 ]

const myNewSlice = myArr.slice(1, 3);
// Creates a new array by extracting elements from index 1 to 2 (not including 3) from 'myArr'.

console.log(myNewSlice);
// Outputs: [ 2, 3 ]
console.log("B ", myArr);
// Outputs: B [ 1, 2, 3, 4, 5, 6 ]
// The original array remains unchanged.

const myNewSplice = myArr.splice(1, 3);
// Removes elements from index 1 to 3 (including 1, excluding 4) from 'myArr' and assigns them to 'myNewSplice'.

console.log("C ", myArr);
// Outputs: C [ 1, 5, 6 ]
console.log(myNewSplice);
// Outputs: [ 2, 3, 4 ]
// The original array is modified.

// Definitions:

// Array:
// An array is a data structure that represents a collection of elements, each identified by an index or a key.

// Array Methods:
// Methods are built-in functions provided by the Array object in JavaScript to perform operations on arrays. Some common methods include push, pop, unshift, shift, includes, indexOf, join, slice, and splice.

// Additional Array Methods

// Concatenation
const concatArr = myArr.concat([8, 9]);
// Combines 'myArr' with another array [8, 9] and creates a new array 'concatArr'.

console.log(concatArr);
// Outputs: [1, 5, 6, 8, 9]

// Reversal
const reversedArr = myArr.reverse();
// Reverses the elements of 'myArr' in place.

console.log(reversedArr);
// Outputs: [6, 5, 1]

// Mapping
const multipliedByTwo = myArr.map(num => num * 2);
// Creates a new array 'multipliedByTwo' by applying a function to each element of 'myArr'.

console.log(multipliedByTwo);
// Outputs: [12, 10, 2]

// Filtering
const evenNumbers = myArr.filter(num => num % 2 === 0);
// Creates a new array 'evenNumbers' containing elements from 'myArr' that satisfy the filtering condition.

console.log(evenNumbers);
// Outputs: [6]

// Reduction
const sumOfArray = myArr.reduce((acc, num) => acc + num, 0);
// Reduces the elements of 'myArr' to a single value (sum) using an accumulator.

console.log(sumOfArray);
// Outputs: 18

// Iteration
myArr.forEach(num => console.log(num));
// Iterates through each element of 'myArr' and logs it to the console.

// Find
const findElement = myArr.find(num => num > 4);
// Returns the first element in 'myArr' that satisfies the provided testing function.

console.log(findElement);
// Outputs: 6

// Every
const allGreaterThanZero = myArr.every(num => num > 0);
// Checks if all elements in 'myArr' satisfy the provided testing function.

console.log(allGreaterThanZero);
// Outputs: true
