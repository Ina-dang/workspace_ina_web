
function foo(){

}

//함수를통한 생성자를 통한 인스턴스 호출

foo.prop = 10;

foo.method = function(){
    console.log(this.prop);
}

foo.method();

var o = {
    a : 10,
    b : function(){},
    c(){}, //생성자함수 안됨
    d : 20
}


var Student = function(no, name) {
    this.no = no;
    this.name = name;
}

var s = new Student(10, '홍길동');
console.log(s);



