// Object iteration using for...in
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// Output:
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

// For arrays, use for...of
for (const element of programming) {
    console.log(element);
}
// Output:
// js
// rb
// py
// java
// cpp

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// For maps, use forEach or other methods
map.forEach((value, key) => {
    console.log(key, ':-', value);
});
// Output:
// IN :- India
// USA :- United States of America
// Fr :- France
