// Comparison operators
// console.log(2 > 1);
// Outputs: true

// console.log(2 >= 1);
// Outputs: true

// console.log(2 < 1);
// Outputs: false

// console.log(2 == 1);
// Outputs: false

// console.log(2 != 1);
// Outputs: true

// console.log("2" > 1);
// Outputs: true
// The string "2" is coerced to a number during comparison.

// console.log("02" > 1);
// Outputs: false
// The string "02" is coerced to a number during comparison. Leading zeros are ignored.

console.log(null > 0);
// Outputs: false
// Inequality comparisons involving null or undefined result in false.

console.log(null == 0);
// Outputs: false
// Equality comparison involving null and a number results in false.

console.log(null >= 0);
// Outputs: true
// Greater than or equal comparison involving null results in true, as null is coerced to 0.

console.log(undefined == 0);
// Outputs: false
// Equality comparison involving undefined and a number results in false.

console.log(undefined > 0);
// Outputs: false
// Inequality comparison involving undefined and a number results in false.

console.log(undefined < 0);
// Outputs: false
// Inequality comparison involving undefined and a number results in false.

// Strict equality comparison
console.log("2" === 2);
// Outputs: false
// Strict equality (===) checks both value and type. The string "2" is not strictly equal to the number 2.
