function multiply(x,y) {
    return x * y ; //반환문.
    // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시
    console.log("실행되지 않는다.");
}
console.log(multiply(3,5));

function foo () {
    return; //생략해도 암묵적으로 언디파인드반환
}
console.log(foo()); //undefined

// return;

function change(d) {
    d.x = 1000;
    console.log(d.x);
} // 함수선언부 ( 언젠가 선언 되겠지 )

var d = {x : 10};
console.log(d.x); //10
change(d);
console.log(d.x);

console.log("=====================")

function change2(d) {
    d = 1000;
    console.log(d);
} // 함수선언부 ( 언젠가 선언 되겠지 )

var d = 10;
console.log(d);
change2(d);
console.log(d);
