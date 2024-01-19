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

