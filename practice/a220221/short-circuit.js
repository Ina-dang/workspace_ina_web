// 단축평가 (short-circuit evaluation) : 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정 생략

var done = true;
var message = '';

//if..else 문
if(done) message = '완료';
else     message = '미완료';
console.log(message); //완료

//if..else 문 삼항 조건 연산자로 대체
message = done ? '완료' : '미완료';
console.log(message);


//객체를 가리키기를 기대하는 변수가 null 또는 undefined 가 아닌지 확인하고 프로퍼티를 참조할 때
// 객체 : key & value로 구성된 property 집합.
// 만약 객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 null or undefined 인 경우 객체의 프로퍼티를 참조하면
// TypeError발생. 에러 발생 시 프로그램은 강제 종료 됨

var elem = null;
// var value = elem.value; //TypeError : Can't read properties of null
//이 때 단축평가를 사용하면 에러 발생 x
// elem이 null이나 undefined와 같은 Falsy값이면 elem, Truthy값이면 elem.value 평가
var value = elem && elem.value;
console.log(value);


//함수 매개변수에 기본갑 설정
// 함수 호출 시 인수전달 x ==> 매개변수에 undefined 할당. 
// 이 때 단축평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.
function getStringLength(str){
    str = str || '';
    return str.length;
}

console.log(getStringLength());
console.log(getStringLength('hi'));

//ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}
console.log(getStringLength());
console.log(getStringLength('hi'));