// Array to be iterated
const coding = ["js", "ruby", "java", "python", "cpp"]

// Using forEach with an arrow function and attempting to assign values
const values = coding.forEach((item) => {
    // This block is executed, but forEach doesn't return anything, so values will be undefined
    return item;
})

console.log(values); // Output: undefined

// Array of numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using filter method with an arrow function
// const newNums = myNums.filter((num) => {
//     return num > 4;
// })

// Equivalent result using forEach and pushing values into a new array
const newNums = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
})

console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]

// Array of book objects
const books =  [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books based on genre and publish year using filter and arrow function
let userBooks = books.filter((bk) => bk.genre === 'History');

// Refining the filter based on additional conditions
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);
// Output: [{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }]


/**
 
The forEach method doesn't return anything (undefined), so attempting to assign its result to a variable (values) will result in undefined.
The filter method creates a new array containing elements that pass the specified condition.
In the last example, books are filtered based on the genre 'History' and publish year greater than or equal to 1995.
 */
