
// undefined(할당을 미정의), not defined (선언을 미정의)
// Data type : number, string, boolean, object, funtion, undefined


//undefined 왜 쓰지 싶었는데. 모든 변수의 초기값으로 일단 이해 해두면 된다고 하셨다
var score

console.log(score == undefined)


//변수 호이스팅
console.log(kor); //undefined

var kor = 10;
console.log(kor); //10

//정규 표현식 리터럴
var regExp = /[가-힣]/
var regExp2 = new RegExp("[가-힣]"); //자바식표현