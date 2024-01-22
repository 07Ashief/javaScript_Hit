// Array of numbers
const myNums = [1, 2, 3]

// Using reduce method with a regular function
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

// Using reduce method with an arrow function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal); // Output: 6

// Array of items in a shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Using reduce to calculate the total price in the shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 21996


/**
The reduce method applies a function against an accumulator and each element in the array to reduce it to a single value.
The first argument to the reduce function is the callback function, and the second argument is the initial value of the accumulator (0 in this case).
In the first example, the reduce function is used to sum up the values in the array.
In the second example, the reduce function is utilized to calculate the total price of items in the shopping cart. 

 */

/*
for...of is used for iterating over iterable objects like arrays and strings.
for...in is used for iterating over the enumerable properties of an object.
forEach is a method specifically for arrays and is used to execute a function for each element.
filter creates a new array with elements that pass a specified test condition.
map creates a new array by applying a function to each element of an existing array.
reduce accumulates a single result by applying a function against an accumulator and each element in the array.
*/
