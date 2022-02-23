// 학생 정보를 저장할 객체를 만드세요
// 학번, 이름, 국어, 영어, 총점

var obj = {
// key & value
    // no : 13,
    "no" : 2, //이렇게 따옴표로 감쌀 수도 있음;
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

var obj = {x : 1, "my-item" : 2} // - 를 쓸 수는 있긴한데
console.log(obj["my-item"]) //이렇게밖에 안된니까 - 하지마십셔

var obj = {}; 
console.log(obj);
var key = 'hello';
obj[key] = "가나다라"
console.log(obj.hello); //'가나다라'
console.log(obj[key]);
