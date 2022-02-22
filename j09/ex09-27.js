// 옵셔널 체이닝

var num1 = 0;
var num2 = new Number(0);

console.log(typeof num1, num1);
console.log(typeof num2, num2);

console.log(!!num1);
console.log(!!num2);

console.log(num1 == num2);



var str = '';
var length = str && str.length;  //아무것도 출력되지 않는다
var length = str?.length; //이렇게 해야 0값이 들어간다
console.log(length);

//null 병합 연산자
var foo = null ?? 'default string';
console.log(foo);
