

//Using String search() With a String

let text = "Visit W3Schools!";
let n = text.search("W3Schools");

console.log(n);

//Using String search() With a Regular Expression
let m = text.search(/w3schools/i);
console.log(m);

//Using String replace() With a String
let text1 = "Visit Microsoft!";
let result = text1.replace("Microsoft", "W3Schools");

console.log(result);

//Using String replace() With a Regular Expression
let text2 = "Visit Microsoft!";
let result2 = text1.replace(/microsoft/i, "W3Schools");

console.log(result2);

