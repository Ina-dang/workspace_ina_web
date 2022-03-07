
//생성자 함수

function Circle(radius){
    this.radius = radius;
    this.getArea = function(){
        return Math.PI * this.radius ** 2;
    };
}

//반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
//반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);


console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());



function Circle1(radius){
    this.radius = radius;
}

Circle1.prototype.getArea = function(){
    return Math.PI * this.radius ** 2;
};


Circle1.prototype.PI = Math.PI; 
Circle1.PI = Math.PI;

const circle3 = new Circle1(1);
const circle4 = new Circle1(2);



console.log(circle3.getArea === circle4.getArea);

console.log(circle3.getArea());
console.log(circle4.getArea());
console.log(circle4.PI);
console.log(Circle1.PI);
console.log(circle4.__proto__.PI);


//Date 타입의 인스턴스에 toMyString 이란는 메서드 제작 > yyyy-MM-dd HH:mm:sss형태의 시간정보 반환
Number.prototype.lz = function(){
    return this < 10 ? "0"+this : ""+this;
}
Date.prototype.toMyString = function(){
    return `${this.getFullYear()}/${(this.getMonth()+1).lz()}/${(this.getDate()).lz()}`
    +` ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`;
}

var num = 5;
console.log(num.lz());
const now = new Date();

console.log(now.toMyString());