// Primitive Data Types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
// Variable 'score' is assigned a number value (Primitive type: Number).

const scoreValue = 100.3;
// Variable 'scoreValue' is assigned a floating-point number value (Primitive type: Number).

const isLoggedIn = false;
// Variable 'isLoggedIn' is assigned a boolean value (Primitive type: Boolean).

const outsideTemp = null;
// Variable 'outsideTemp' is assigned a null value (Primitive type: Null). console.log(typeof outsideTemp) = object

let userEmail;
// Variable 'userEmail' is declared but not assigned a value yet. It is currently of type 'undefined' (Primitive type: Undefined).

const id = Symbol('123');
const anotherId = Symbol('123');
// Variables 'id' and 'anotherId' are assigned unique Symbol values. Symbols are unique identifiers.
console.log(id === anotherId);
// Outputs: false
// Symbols with the same description are not equal.

// const bigNumber = 3456543576654356754n;
// BigInt is commented out. Uncomment to see its behavior.

// Reference (Non-Primitive) Data Types

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
// Variable 'heros' is assigned an array (Reference type: Array) containing string values.

let myObj = {
    name: "hitesh",
    age: 22,
};
// Variable 'myObj' is assigned an object (Reference type: Object) with properties 'name' and 'age'.

const myFunction = function(){
    console.log("Hello world");
};
// Variable 'myFunction' is assigned a function (Reference type: Function).

console.log(typeof anotherId);
// Outputs: "symbol"
// 'typeof' operator returns the type of the variable. In this case, it's "symbol".

// Link to ECMAScript Specification for 'typeof':
// https://262.ecma-international.org/5.1/#sec-11.4.3
