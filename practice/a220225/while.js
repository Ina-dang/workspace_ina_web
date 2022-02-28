
//as long as a variable (i) is less than 10;

var text = "";
var i = 0;
while (i < 10) {
    text += `The number is ${i} \n`;
    i++;
}
console.log(text);

// Break Statement

var text = "";
for (var i = 0; i < 10 ; i++) {
    if ( i == 3 ) {
        break;
    }
    text += `The number is ${i} \n`;
}
console.log(text);
