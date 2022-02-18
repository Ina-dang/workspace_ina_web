var first = 'Ung-mo';
var last = 'Lee';

console.log("제 이름은" + last + " " + first + "입니다");
//ES6 표현식 삽입
console.log(`My name is ${first} ${last}.`);
//기존 "" 문자열
console.log("My name is ${first} ${last}."); //${} 도 문자열로 인식

//ES6 표현식 삽입
console.log(`1234 * 567 = ${1234 * 567}`);


console.log(!!10);
console.log(!10);


// 0 >> false
for (var i = -1; i++; ) {
    console.log(i);
}

console.log("========================================");
//0은 false
console.log(0, !0);
console.log(10, !!10);
console.log(-3, !!-3);
console.log("abc", !!"abc");
console.log("", !!"");
console.log({}, !!{}); //주소가 존재해서 값이 있다고 인식
console.log([], !![]);
console.log(null, !!null); //참조되지 않는 객체
console.log(undefined, !!undefined); //미할당된 영역
console.log(function(){}, !!function(){});


console.log("========================================");
var num1 = 10;
var num2 = new Number(10);

console.log(num1 == num2); //typoof >> number
console.log(num1 === num2); //typeof >> object 라서 false
console.log(num1 === num2 / 1); //피연산자가 숫자일 때만 연산 ==> num2를 number로 변환해서 true 나옴
console.log(10 === 10);

console.log(5 == '5');
console.log(5 === '5');
console.log(5 == true);

//형변환 (자바)
// int a = 10;
// short 5 = (short)a;

//형변환 (자바스크립트)
// 문자열 >> 숫자 /1
var str = "1234"; //type of string
var num = str; //type of string
var num = Number(str); //type of number

console.log(num, typeof num);
console.log(num, typeof bool);

// 숫자 >> 문자열 +""
var str2 = String(num);

// 문자열 >> 불린 !!(이중부정)
// 숫자 >> 불린 !!(이중부정)
var bool = Boolean(str);

// 불린 >> 숫자 :: /1
console.log(true / 1)
console.log(false / 1)

// 불린 >> 문자열 :: +""


console.log(undefined / 1);
console.log(null / 1);
console.log({} / 1);
console.log(function(){} / 1);

console.log("====================================")
console.log(-0 === 0);
console.log(Object.is(0, +0));
console.log(Object.is(0, -0));
console.log(NaN === NaN); 
console.log(Object.is(NaN, NaN));

console.log("====================================")
console.log("abcd" > 1); //NaN > 1 ==> false
console.log("abcd" < 1); //NaN < 1 ==> false
console.log("abcd" && 1); // NaN  && 1
console.log( 1 && "abcd");
console.log( true && 1 || true);

console.log("====================================")
var a = 1 ? 2 : 3;
console.log(a); //2

console.log("==========쉼표연산자================")
var x, y, z;
a = (x = 1, y = 2, z = 3);
console.log(a) //3
a = ("a", "b", "5");
console.log(a) //5

console.log("==========지수연산자================")
console.log(Math.pow(0,0));
console.log(0 ** 0);
console.log((-5) ** 0); //음수를 거듭제곱의 밑으로 사용할 때는 괄호로 묶어야 한다
console.log((-5) ** 2); //괄호 없으면 오류뜬다


console.log("==========그외 연산자================")
var obj = {x : 1 , y : 2};
//프로퍼티(객체멤버) 추가
obj.z = 3;
console.log(obj);
//프로퍼티 삭제
delete obj.x;
console.log(obj);
//in연산자
console.log('z' in obj); //true
console.log('x' in obj); //false

console.log("==========in 연산자================")
var arr = [1,2,3,4,5];
for(var i in arr) {
    console.log(arr[i]);
}

console.log("==========in 연산자================")
for(var i in obj) {
    console.log(obj[i]);
}