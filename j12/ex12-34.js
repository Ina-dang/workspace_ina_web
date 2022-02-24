
var result = (function() {
    return "hello world";
})();
//외부참조안됨
console.log(typeof result);

//스코프를 통한 캡슐화 처리


function Student (no, name) {
    this.no = no;
    this.name = name;
} //호출가능

function Student (no, name) {
    var n = no;
    var name = name;

    this.getNo = function(){
        return no;
    }

    this.setNo = function(no){
        n = no;
    }
}//지역변수를 활용한 캡슐화

var student = new Student(10, "가가가");
console.log(student.getNo());
// console.log(student.no()); 
//TypeError뜸 캡슐화 되어있어서 못찾음==> 스코프해야함