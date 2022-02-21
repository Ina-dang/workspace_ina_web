// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당
// 예제 08-04 96p

var x = 2;
var result;

if (x % 2 ) {
    result = '홀수';
} else {
    result = '짝수';
} 

console.log(result);

// 삼항 조건 연산자로 변환
var result = x % 2 ? '홀수' : '짝수';
console.log(result);

