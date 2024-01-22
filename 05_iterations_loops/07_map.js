// Array of numbers
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map to add 10 to each number
// const newNums = myNumers.map( (num) => { return num + 10})

// Chaining map and filter methods to perform multiple operations
const newNums = myNumers
    .map((num) => num * 10)    // Multiply each number by 10
    .map((num) => num + 1)     // Add 1 to each result
    .filter((num) => num >= 40);  // Filter numbers greater than or equal to 40

console.log(newNums); // Output: [41, 51, 61, 71, 81, 91]

/**
The map method creates a new array by applying a function to each element of the original array.
Chaining map and filter allows performing multiple operations on the array in a concise manner.
In this example, each number is first multiplied by 10, then 1 is added to each result, and finally, numbers less than 40 are filtered out. The result is a new array [41, 51, 61, 71, 81, 91]. 

 */