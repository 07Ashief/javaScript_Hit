const accountId = 12345
let accountName = 'Ashif'
var accountPassword = 345678
accountCity = 'chennai'
let accountState;

// console.log(accountName)
// console.table([accountId,accountName,accountPassword,accountCity])

// accountId = 987654  not allowed because Assignment to constant variable.

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* Notes
**Variable in JavaScript:**
In JavaScript, a variable is a named storage location for holding data values. It's like a container that can store different types of information. You use variables to store and manage data in your programs.

**Difference between var, let, and const:**

1. **`var`:**
   - **Scope:** Function-scoped, meaning it is only visible within the function where it's declared.
   - **Hoisting:** Variables declared with `var` are hoisted to the top of their scope, allowing them to be used before the declaration.
   - **Reassignment:** Can be reassigned and redeclared within its scope.
   
   ```javascript
   function exampleVar() {
     if (true) {
       var x = 10;
       console.log(x); // Outputs 10
     }
     console.log(x); // Outputs 10, as var is function-scoped
   }
   ```

2. **`let`:**
   - **Scope:** Block-scoped, meaning it is only visible within the block (like loops or conditionals) where it's declared.
   - **Hoisting:** Variables declared with `let` are hoisted to the top of their block but not initialized, so they cannot be used before the declaration.
   - **Reassignment:** Can be reassigned within its scope, but not redeclared in the same scope.

   ```javascript
   function exampleLet() {
     if (true) {
       let y = 20;
       console.log(y); // Outputs 20
     }
     //console.log(y); // Error: y is not defined, as let is block-scoped
   }
   ```

3. **`const`:**
   - **Scope:** Block-scoped, similar to `let`.
   - **Hoisting:** Like `let`, `const` is hoisted but not initialized.
   - **Reassignment:** Cannot be reassigned after declaration. It is a constant value.

   ```javascript
   function exampleConst() {
     const z = 30;
     console.log(z); // Outputs 30
     //z = 40; // Error: Assignment to a constant variable
   }
   ```

In general, it's recommended to use `const` by default and only use `let` when you need to reassign a variable. This helps in writing more maintainable and error-resistant code. 

`console.table` is a function in JavaScript that allows you to display tabular data in the console in a more organized and readable format. It's particularly useful when you have data in the form of objects or arrays, and you want to visualize it in a table.

**Example:**

Let's say you have an array of objects representing information about different fruits:

```javascript
const fruits = [
  { name: 'Apple', color: 'Red', taste: 'Sweet' },
  { name: 'Banana', color: 'Yellow', taste: 'Sweet' },
  { name: 'Grapes', color: 'Purple', taste: 'Sweet and Juicy' }
];
```

If you use `console.table` with this array, it will display the data in a tabular format in the console:

```javascript
console.table(fruits);
```

The output in the console would be something like:

```
┌─────────┬───────┬─────────────────┐
│ (index) │ name  │     color      │
├─────────┼───────┼─────────────────┤
│    0    │'Apple'│     'Red'      │
│    1    │'Banana'│    'Yellow'    │
│    2    │'Grapes'│ 'Purple'       │
└─────────┴───────┴─────────────────┘
```

This makes it easier to compare and understand the data at a glance, especially when dealing with larger datasets. `console.table` is a handy tool for debugging and visualizing structured data during development.
*/
