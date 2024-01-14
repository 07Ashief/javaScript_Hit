// Current date and time
let myDate = new Date();
console.log(myDate.toString());
// Example Output: Sat Jan 14 2023 15:30:45 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());
// Example Output: Sat Jan 14 2023

console.log(myDate.toLocaleString());
// Example Output: 1/14/2023, 3:30:45 PM

console.log(typeof myDate);
// Example Output: "object"

// Creating Date objects with different approaches
let myCreatedDate1 = new Date(2023, 0, 23);
console.log(myCreatedDate1.toLocaleString());
// Example Output: 1/23/2023, 12:00:00 AM

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString());
// Example Output: 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString());
// Example Output: 1/14/2023, 12:00:00 AM

let myCreatedDate4 = new Date("01-14-2023");
console.log(myCreatedDate4.toLocaleString());
// Example Output: 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);
// Example Output: 1642189845132

console.log(myCreatedDate3.getTime());
// Example Output: 1642108800000

console.log(Math.floor(Date.now() / 1000));
// Example Output: 1642189845

let newDate = new Date();
console.log(newDate);
// Example Output: Sat Jan 14 2023 15:30:45 GMT+0000 (Coordinated Universal Time)

console.log(newDate.getMonth() + 1);
// Example Output: 1

console.log(newDate.getDay());
// Example Output: 6 (Saturday)

`${newDate.getDay()} and the time `;
// Example Output: "6 and the time"

newDate.toLocaleString('default', {
    weekday: "long",
});
// Example Output: "Saturday"
