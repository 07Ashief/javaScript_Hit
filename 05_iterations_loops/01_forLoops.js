// For Loops in JavaScript
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

// Simple 'for' loop
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is the best number");  // Output: "5 is the best number" (when i is 5)
    }
    console.log(i);
}

// Accessing variable outside the loop
// Note: 'element' is not accessible outside the loop.
// console.log(element);

// Nested 'for' loops
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and outer loop ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Iterating over an array using 'for' loop
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// 'break' and 'continue'
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);  // Output: "Detected 5" (when i is 5)
        break;
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);  // Output: "Detected 5" (when i is 5)
        continue;
    }
    console.log(`Value of i is ${index}`);
}

/*
Notes:
- The 'for' loop in JavaScript is used to iterate over a sequence of values, typically with a counter variable.
- A loop usually consists of an initialization statement, a condition, and an iteration statement.
- The 'for' loop initializes a counter variable, checks a condition, executes the loop body, and increments the counter.
- 'break' is used to exit the loop prematurely, while 'continue' is used to skip the current iteration and move to the next one.
- Nested 'for' loops are used to create multi-dimensional loops.

Code Execution:
- The output depends on the loop conditions and the values being iterated.


*/