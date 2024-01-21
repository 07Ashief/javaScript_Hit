// Array to be iterated
const coding = ["js", "ruby", "java", "python", "cpp"]

// Using forEach with an anonymous function
coding.forEach(function(val) {
    console.log(val); // Output: js ruby java python cpp
});

// Using forEach with an arrow function
coding.forEach((item) => {
    console.log(item); // Output: js ruby java python cpp
});

// Defining a function separately and using it with forEach
function printMe(item) {
    console.log(item); // Output: js ruby java python cpp
}

coding.forEach(printMe);

// Using forEach with callback parameters (item, index, array)
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    // Output:
    // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
});

// Array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// Using forEach to iterate over an array of objects
myCoding.forEach((item) => {
    console.log(item.languageName);
    // Output: javascript java python
});

/*
Differences:
1. forEach is a method specific to arrays.
2. It directly operates on the values of the array, not the indices.
3. It provides a simpler syntax, especially with arrow functions.
4. It's more modern and commonly used for array iteration in JavaScript.
5. The callback function in forEach takes three parameters: item, index, and array.
6. forEach doesn't work directly with objects; for that, we would typically use for...in or Object.keys().
*/
