// Object Creation and Manipulation

// Creating an Object using Object Literal:
const tinderUser = {};
// An empty object created using object literal notation.

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// Adding properties to the 'tinderUser' object.

console.log(tinderUser);
// Outputs: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Nested Object:
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);
// Outputs: hitesh
// Accessing nested properties within the 'regularUser' object.

// Merging Objects:
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = {...obj1, ...obj2};
// Merging objects using the spread operator.

console.log(obj3);
// Outputs: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Array of Objects:
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" }
];

console.log(users[1].email);
// Outputs: h@gmail.com
// Accessing properties within an array of objects.

// Object Methods:
console.log(Object.keys(tinderUser));
// Outputs: [ 'id', 'name', 'isLoggedIn' ]
// Getting an array of keys from the 'tinderUser' object.

console.log(Object.values(tinderUser));
// Outputs: [ '123abc', 'Sammy', false ]
// Getting an array of values from the 'tinderUser' object.

console.log(Object.entries(tinderUser));
// Outputs: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// Getting an array of key-value pairs from the 'tinderUser' object.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Outputs: true
// Checking if the 'tinderUser' object has the 'isLoggedIn' property.

// Destructuring:
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

const {courseInstructor} = course;
// Destructuring the 'course' object to get the value of 'courseInstructor'.

const {courseInstructor: instructor} = course;
// Renaming the key of the object by using the above method

console.log(instructor);
// Outputs: hitesh
// Accessing the destructured value.

// Notes:
// - Object literals provide a convenient way to create and initialize objects.
// - Merging objects can be done using spread operators or Object.assign().
// - Destructuring allows extracting values from objects easily.
// - Object methods like Object.keys, Object.values, and Object.entries help in working with object properties.
