
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Switch Statement in JavaScript

// Example
const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("Default case match");
        break;
}

/**
 Notes:
- The 'switch' statement is used for multiple conditions based on the value of an expression.
- It provides an alternative to using multiple 'if-else if' statements for readability and maintainability.
- Each 'case' represents a possible value for the expression, and the code block under the matching 'case' is executed.
- The 'break' statement is used to exit the switch block. Without it, subsequent code blocks would also be executed.

Code Execution:
- The output depends on the value of the 'month' variable. The matching 'case' block will be executed.
- If no 'case' matches, the 'default' block is executed (if provided).


 */