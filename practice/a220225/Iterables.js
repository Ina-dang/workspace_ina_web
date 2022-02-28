
// Iterating Over a string

//for of
const name1 = "W3Schools";
let x = "";
console.log(typeof x);
let text = "";
for (let x of name1) {
    text += `${x}\n`;
}
console.log(text);

var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(typeof fruits);


// const x1 = "";
let text1 = "";
for (var x1 in fruits) {
    text1 += `${x1}\n`;
}
console.log(text1)
