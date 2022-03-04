
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array){
    txt += `${value} `;
    console.log(txt)
}

//map >> each array element return
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction1);
function myFunction1(value, index, array){
    return console.log(`${value * 2} `);
}

//filter>> 조건통과요소 리턴 >> Boolean

const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction2);
function myFunction2(value, index, array){
    return console.log(`${value > 18} `);
}

//reduce 45 + 4 + 9 + 16 + 25
const numbers4 = [45, 4, 9, 16, 25];
let sum = numbers4.reduceRight(myFunction3);

function myFunction3(total, value){
    return total + value;
}
console.log(sum);
console.log(sum);


//every 전체 통과해야 트루
function myFunction4(value){
    return value > 18;
}
let sum1 = numbers4.every(myFunction4);
console.log(sum1);
