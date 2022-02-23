
// const d = new Date();

// console.log(d);

// var date1 = new Date();
// console.log(date1);

// var date = new Date(year, month, day, hours, minutes, seconds, millisseconds);
// console.log(date);

// var date = new Date(milliseconds);
// console.log(date);

const date = new Date("October 13, 2014 GMT11:13:00");
console.log(date.toUTCString());
console.log(date.toDateString());
console.log(date.toISOString());

const d = new Date();
year = d.getFullYear();
console.log(year);