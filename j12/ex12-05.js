
function add1 (x,y){
    return x + y;
} //기명함수는 자체호이스팅 o
console.log(add1(3,5));

var add2 = function(x,y){
    return x + y;
} //익명함수는 호이스팅하긴하는데 위쪽에 있으면 undefined상태라 자기위치밑에서 해야함
console.log(add2(3,5));

var add = (x,y) => x + y;
console.dir(add());
console.log(add(3,5));

