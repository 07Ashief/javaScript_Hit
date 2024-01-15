// Object Definition:

// An object is a collection of key-value pairs where each key is a unique string or symbol (property) and each value can be of any data type, including other objects, functions, or primitive types.

// Singleton:
// A singleton is an object that can only be instantiated once. In JavaScript, object literals are often used to create singleton objects.

// Object.create:
// Object.create is a method that allows the creation of a new object with a specified prototype object. It is a way to create objects and define their properties in a more dynamic manner.

// Object Literals:
// Object literals are a convenient way to create objects in JavaScript by providing a concise syntax for defining properties and their values within curly braces.

const mySym = Symbol("key1");

// Creating an Object Literal
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(typeof JsUser);
// Outputs: object
// Checking the type of 'JsUser' using the 'typeof' operator.

console.log(JsUser instanceof Object);
// Outputs: true
// Checking if 'JsUser' is an instance of the Object constructor.

// Modifying Object Properties
JsUser.email = "hitesh@chatgpt.com";
// Changing the value of the 'email' property.

Object.freeze(JsUser);
// Freezing the 'JsUser' object to make it immutable.

JsUser.email = "hitesh@microsoft.com";
// Attempting to change the 'email' property after freezing.

console.log(JsUser);
// Outputs: Object is frozen, changes are not allowed

// Adding Methods to Objects
JsUser.greeting = function(){
    console.log("Hello JS user");
};
// Adding a method 'greeting' to the 'JsUser' object.

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};
// Adding another method 'greetingTwo' that references a property of the object.

console.log(JsUser.greeting());
// Outputs: Hello JS user
console.log(JsUser.greetingTwo());
// Outputs: Hello JS user, Hitesh
