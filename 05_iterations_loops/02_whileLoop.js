// Definition of while loop:

// The while loop in JavaScript executes a block of code repeatedly as long as a specified condition evaluates to true.
// It consists of a condition and the code to be executed. The condition is checked before each iteration.

// Example:

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}
// Output: Value of index is 0, 2, 4, 6, 8, 10

// In this example, the while loop iterates as long as the 'index' variable is less than or equal to 10.
// It prints the current value of 'index' in each iteration.

// Note: It's important to ensure that the condition inside a while loop will eventually become false to avoid an infinite loop.

// Usage in array iteration:

let myArray = ['flash', 'batman', 'superman'];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}
// Output: Value is flash, batman, superman

// The while loop can also be used for iterating over array elements, similar to a for loop.

// Definition of do...while loop:

// The do...while loop is similar to the while loop but with one key difference: it always executes the block of code at least once.
// The condition is evaluated after the code block, ensuring that the code runs at least once before checking the condition.

// Example:

let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
// Output: Score is 11

// In this example, even though the initial value of 'score' is greater than 10,
// the code block is executed once before the condition is checked, resulting in the output.
