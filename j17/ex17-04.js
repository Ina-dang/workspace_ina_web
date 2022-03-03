//생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

//인스턴스 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());


//new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지않는다

const circle3 = Circle(15);

console.log(circle3); //undefined
console.log(radious); //radious is not defined
console.log(this.radious); //undefined