var var1 = 1;

if (0) {
    var var2 = 2;
    if (true) {
        var var3 = 3;
    }
}
//var3이 나오는 이유 >> 함수 내부가 아니면 지역변수가 아님

function foo() {
    var var4 = 4;
    
    function bar() {
        var var5 = 5;
    }
}
foo();

console.log(var1);
console.log(var2);
console.log(var3);
// console.log(var4); //var4 is not defined
// console.log(var5); //var5 is not defined



console.log("======================");
console.log(x);
var x = 'global'; //주석처리시 local출력후 오류

function foo() {
    console.log(x); //undefined
    var x = 'local';
    console.log(x);
}
foo(); //주석처리시 global만 출력 (foo()가 호출되지않아서)

// console.log(foo());

console.log(x);