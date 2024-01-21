["", "", ""]
[{}, {}, {}]

// Using for...of loop with arrays

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
// Output: 1, 2, 3, 4, 5

// Iterating through characters in a string with for...of loop

const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// Output: Each char is H, Each char is e, Each char is l, Each char is l, Each char is o, Each char is  , Each char is w, Each char is o, Each char is r, Each char is l, Each char is d, Each char is !

// Breaking out of the loop when a condition is met

// const greetings = "Hello world!";
for (const greet of greetings) {
    if (greet === ' ') {
        console.log('Space detected');
        break;
    }
    console.log(`Each char is ${greet}`);
}
// Output: Each char is H, Each char is e, Each char is l, Each char is l, Each char is o, Space detected

// Using for...of loop with Map

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Note: Duplicate key 'IN' will be overwritten

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// Output: IN :- India, USA :- United States of America, Fr :- France

// Attempting to use for...of loop with objects (doesn't work as expected)

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// Error: TypeError: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// Instead, we prefer using for...in loop with objects


/**
 // Definition of for...of loop:

// The for...of statement creates a loop that iterates over iterable objects (arrays, strings, Map, Set, etc.),
// invoking a custom iteration hook with statements to be executed for each distinct element.

// Example:

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
// Output: 1, 2, 3, 4, 5

// In the example, the for...of loop simplifies the iteration through the elements of the array 'arr'.
// It declares a variable 'num' to represent each element successively, making the code concise and readable.

// Note: The for...of loop is suitable for iterating over values of iterable objects, but not for objects' properties.
// It is often used with arrays, strings, and collections like Map and Set.



// Definition of Map:

// The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as a key or value.

// Example:

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");

// Usage in for...of loop:

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// Output: IN :- India, USA :- United States of America

// In this example, the for...of loop simplifies the iteration through key-value pairs of the Map 'map'.
// It destructures each entry into variables 'key' and 'value', making the code more expressive.

 */

