//문자열 프로토타입
var str ='hello world';

//문자열에서 제일 처음 글자 + 제일 마지막 글자 반환
// function myfunction(str) {
//     return str[0] + str[str.length - 1] ;
// }

String.prototype.myfunction = function(){
    return this[0] + this[this.length - 1] ;
} //this == 이 메서드를 호출할 객체

// var result = myfunction(str);
//객체 지향 하려면 마이펑션을 메서드로 만들어야한다. 그 뒤에 또 myfunction(). 등으로 메서드 체이닝 가능
var result = str.myfunction(); 

console.log(result);
console.log("abcde".myfunction());

// no, name, kor, eng, mat == 변수 //  sum, avg == 함수형태(메서드 될 녀석들)
// 학생 10명을 저장 ==> 70개 >> 프로토타입을 사용하면 52개로 줄어듦(총점,평균은 프로토타입)


