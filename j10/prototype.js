// 프로토타입
// no, name, kor, eng, mat, sum, avg

//각 객체들 배열 내 저장
// var students = [{no:1, name : '홍길동'}, {no : 1}]; //값에대한 일관성 보존 어려움

//List배열이랑 같음쓰 add 대신 push
var students = [];
// students.push({no:1, name:"홍길동"});
// students.push({no:2});


//자바처럼 생성자를 만들기 위한 클래스가 없음 ==> 함수

//대문자로 시작 (생성자함수)
function Student(no, name, kor, eng, mat) {
    this.no = no ?? 1;
    this.name = name ?? '고길동';
    this.kor = kor ?? 0;
    this.eng = eng ?? 0;
    this.mat = mat ?? 0;

    // this.sum = function () {
    //     return this.kor + this.eng + this.mat;
    // }
    // this.avg = function () {
    //     return this.sum() / 3;
    // }

    // this.toString = function() {
    //     return `${this.no} ${this.name} :: ${this.sum()}, ${this.avg()} ` ;
    // }
}

var result = Student();

students.push(new Student(1, '1길동', 80, 90, 80));
students.push(new Student(2, '2길동', 40, 80, 40));
students.push(new Student(3));

// console.log(result == undefined);

// console.log(students[0]);
// console.log(students[1]);

// console.log(students[0].kor);

// Java prototype :: 생성된 객체가 공유하는 공간
// JS prototype :: 

// this 미래에 생성될 객체의 주소 값



//스튜던트 프로토타입
Student.prototype.sum = function () {
    return this.kor + this.eng + this.mat;
}
Student.prototype.avg = function () {
    return this.sum() / 3 ;
}

for (var i in students) {
    console.log("총점 : " + students[i].sum());
    console.log("평균 : " + students[i].avg());
}