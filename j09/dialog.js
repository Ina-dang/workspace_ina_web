function run(x, y) {
    console.log(`x : ${x}, y :, ${y}`)
    return x + y;
}

var result = run(10, '20', 30, 40); 
console.log(result);

//함수타입의 리턴
function outer() {
    return function () {
        return function () {
            return 10;
        }
    }
}
console.log(outer()()());

//함수타입의 파라미터
function f(t) {
    t();
}
function f2() {
    console.log("abcd");
}
f(outer()());

console.log(f2);