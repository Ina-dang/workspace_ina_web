console.log(max2(100, 3, 20, 55, 23));//55

function max2() {
    // let ret = 0;
    var ret = arguments[0];
    console.log(arguments);
    for (var i in arguments) {
        if (ret < arguments[i]) {
            ret = arguments[i]
        }
    }
    return ret;
}
console.log(max2.length); //0