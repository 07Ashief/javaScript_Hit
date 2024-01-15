// Arrays and Array Methods

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
// Adds the entire 'dc_heros' array as a single element to the end of 'marvel_heros'.

console.log(marvel_heros);
// Outputs: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3][1]);
// Outputs: flash
// Accessing the second element of the embedded array inside 'marvel_heros'.

const allHeros = marvel_heros.concat(dc_heros);
// Concatenates 'marvel_heros' and 'dc_heros' into a new array 'allHeros'.

console.log(allHeros);
// Outputs: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ], 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros];
// Uses the spread operator to concatenate 'marvel_heros' and 'dc_heros' into 'all_new_heros'.

console.log(all_new_heros);
// Outputs: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ], 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// An array with nested arrays.

const real_another_array = another_array.flat(Infinity);
// Flattens the nested arrays in 'another_array' to a single level using the 'flat' method.

console.log(real_another_array);
// Outputs: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// 'Infinity' is used to flatten nested arrays to any depth.

console.log(Array.isArray("Hitesh"));
// Outputs: false
// Checks if the argument is an array. In this case, "Hitesh" is not an array.

console.log(Array.from("Hitesh"));
// Outputs: [ 'H', 'i', 't', 'e', 's', 'h' ]
// Converts a string into an array of its characters.

console.log(Array.from({ name: "hitesh" }));
// Outputs: []
// Converts an object into an array. In this case, an empty array is returned as the object is not iterable.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// Outputs: [ 100, 200, 300 ]
// Creates a new array from the given arguments.
