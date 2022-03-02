
function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
    console.log(x,y);
    return `${x} + ${y} = ${x + y}`;
}

console.log(myFunction(3));


x = findMax(1, 123, 500, 115, 44, 88);

function findMax(){
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(x));
console.log(x);


y = sumAll(1, 123,500, 115, 44, 88);

function sumAll() {
    let sum = 0;
    for (let j = 0; j < arguments.length; j++) {
        sum += arguments[j];
        console.log(`sum 값 더하기 ${sum}`);
    }
    return sum;
}
console.log(`총 ${y}`);
