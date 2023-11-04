// const accountId = 123345
// let accountEmail = "ashu@gmail.com"
// var accountPassword = "qwerty"
// // let is used to declare variables that are block scoped, meaning they can only be accessed within the block of code where they're declared
// accountCity = "chennai"


// // console.log(accountEmail, accountId);
// console.table([accountEmail, accountId, accountPassword, accountCity])
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])