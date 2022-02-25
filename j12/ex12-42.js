//즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function() {
    var a = 3;
    var b = 5;
    return a * b
}());

console.log(res);

//제이쿼리 호출 시 많이사용
res = (function(a,b) {
    return a * b
}(3,5)); 
console.log(res);

// $이름의 익명함수를 호출하겠다 ==> 그냥 함수면 $(1);, $("가"); 대신 어떤타입인지 알아야함
$(function() {

});

//제이쿼리함수
$("");