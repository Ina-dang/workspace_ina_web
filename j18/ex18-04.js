function multiply(x,y){
    console.log(arguments);
    return x * y;
}

function max() {
    let max = -Infinity;
    console.log(arguments)
    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index] > max) {
            max = arguments[index];
        }
    }
    return max;
}
console.log(max(10, 3, 20, 55, 23));//55

function max1() {
    var ret = arguments[0];
    //arguments 를 사용해 최대값 반환
    for (let index = 1; index < arguments.length; index++) {
        console.log(arguments);
        if (ret < arguments[index]) {
            ret = arguments[index]
        }
    }
    return ret;
}
console.log(max(10, 3, 20, 55, 23));//55


function max2() {
    // let ret = 0;
    var ret = arguments[0];
    for (var i in arguments) {
        console.log(arguments);
        if (ret < arguments[index]) {
            ret = arguments[index]
        }
    }
    return ret;
}
console.log(max(10, 3, 20, 55, 23));//55
console.log(max.length); //0

