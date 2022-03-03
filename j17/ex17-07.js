
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5);

console.log(circle1.radius);
circle1.radius = 20; //this 안붙이면 얘를 못따라감
console.log(circle1.getDiameter());



function Rect(x,y) {
    this.x = x;
    this.y = y;

    this.printArea = function() {
        console.log(this.x * this.y);
        return this;
    }
    this.setX = function(x){
        this.x = x;
        return this;
    }
    this.setY = function(y){
        this.y = y;
        return this;
    }
}

new Rect(3, 4).printArea().setX(5).printArea().setY(5).printArea();


