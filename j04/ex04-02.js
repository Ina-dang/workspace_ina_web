// 자바스크립트 : 완벽한 객체지향 스타일 사용

var userId = 1; //1 이라는 값이 저장된 주소를 userId 라는 이름으로 저장
var userName = 'Lee';

var user = { id : 1, name : 'Lee'}; //객체

var users = [ //객체배열
    { id: 1, name: 'Lee'},
    { id: 2, name: 'Kim'}
];

console.log(userId, userName, user, users);

console.log(userId)
console.log(userName)
console.log(user)
console.log(user.id)
console.log(user.name)
console.log(users);
console.log(users[1].name);
console.log(users[0]);

//함수 선언
        //js엔는 함수리터럴이 있다
var f = function(x) {
    console.log("hello world :: " + x)
}

f("철수");

//객체, 변수, 함수, 문자열 다 변수로 다룸

// 상수는 변경 안됨 == 오류
// const aaa = 1;
// aaa = 2 ;


//이것도 함수선언 == 중첩선언이 가능한 함수들. 의도치않게 전역변수로 선언 될 가능성 있음
function f1 () {
    function f2 () {
        function f3() {

        }
    }
}

//얘도 함수선언 
function test () {
    local = "local"
}

 test()
 console.log(local)