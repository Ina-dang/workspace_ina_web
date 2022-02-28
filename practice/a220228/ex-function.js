
const x = function (a,b) {return a * b};
let z = x(4,3);

console.log(typeof z);
console.log(x);
console.log(z);

//Function() cOnstructor

const myFunction = new Function("a", "b", "return a * b");
let y = myFunction(4,3);

console.log(myFunction);
console.log(y);

console.log(myFunction1(5));

function myFunction1(a) {
    return a * a;
}

//함수는 값으로도 쓰일 수 있다
function myFunction2(a,b) {
    return a * b
}
let a = myFunction2(4,3) * 2;
console.log(a);


//Fuctions are Objects
function myFunction3 (a,b) {
    return arguments.length + "&" + (a + b);
    // return arguments.length;
}
console.log(typeof myFunction3);
console.log(typeof myFunction3());
console.log(myFunction3(3,2));



//function toString 
function myFunction1(a,b){
    return a * b;
}

let text = myFunction1.toString();
console.log(text);


//화살표 함수 Arrrow Funcctionss

//ES5
var x = function(x,y) {
    return x * y;
}

//ES6 ==> don't need the function keyworkd, the return keyword, and the curly brackets.
const x = (x,y) => x * y;



