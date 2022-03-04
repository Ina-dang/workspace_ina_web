console.log(max1(2, 3, 20, 55, 23));

function max1() {
    // let ret = 0;
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