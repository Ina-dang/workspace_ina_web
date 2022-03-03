function foo() {
    console.log(this);
}
//일반함수로 호출
foo();

const obj = {foo};
//메서드로서 호출
obj.foo();

//생성자함수로서 호출
const inst = new foo();


