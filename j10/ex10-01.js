// 학생 정보를 저장할 객체를 만드세요
// 학번, 이름, 국어, 영어, 총점

var obj = {
// key & value
    no : 13,
    name : '홍길동',
    kor : 80,
    eng : 80,
    sum : function (){
       return this.kor + this.eng;
    }
};

//함수 출력시 () 해줘야함
console.log(obj.sum());

var obj1 = {
// key & value
    no : 14,
    name : '김길동',
    kor : 70,
    eng : 80,
    sum : function (){
       return this.kor + this.eng;
    }
};

// 학생 2명 부터는 배열
var students = [obj, obj1];
console.log(students[1].sum());

var arr = [ 1, "2", true, function() {return 0}, {x : 10, y : 20}, [1,2,3]];
console.log(arr[4].x); //x : 10 출력
console.log(arr[3]());
console.log(arr[5][2]);
console.log(typeof arr[1]);