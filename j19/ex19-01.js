
//이름과 주소 속성을 갖는 객체
const person = {
    name : 'Lee',
    address : 'Seoul'
};

console.log(person);


//객체지향 프로그래밍 : 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적 단위로 묶어 생각
//객체 : 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조
//객체의 상태 데이터 : 프로퍼티 , 동작 : 메서드
//각 객체는 다른객체와 관계성을 가질 수 있다.
const circle = {
    radius : 5, //반지름 >> 상태를 나타내는 데이터

    //원의 지름 :2r >> 동작
    getDiameter(){
        return 2 * this.radius;
    }
}