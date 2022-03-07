const  Person = (function(){
    //생성자 함수
    function Person(name){
        this.name = name;
    }

    //프로토타입 메서드 >> 앞으로 인스턴스가 쓸 수도 있는
    Person.prototype.sayHello = function(){
        console.log(`Hi! My name is ${this.name}`);
    };
    
    //생성자 함수를 반환
    return Person;
}());
console.log(Person);

const me = new Person('Lee');

me.sayHello();

//인스턴스 메서드 >> 찐 인스턴스 메서드
me.sayHello = function(){
    console.log(`Hey! My name is ${this.name}`);
};

//인스턴스 메서드가 호출된다. 프로토타임 메서드는 인스턴스 메서드에 의해 가려진다
// (프로퍼티 섀도잉)
me.sayHello();

//프로퍼티제거
delete me.sayHello;

//가려졌던 프로토타입 메서드가 호출된다. 
me.sayHello();

//프로퍼티제거
delete me.sayHello;

//그래도 프로토타입 메서드가 호출된다. 
//하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제 불가
me.sayHello();

//프로토타입 메서드 삭제
delete Person.prototype.sayHello;

me.sayHello(); //TypeError : me.sayHello is not a function