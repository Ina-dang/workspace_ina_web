var binary = 0b01000001;
// var octal = 0o101; o빼도 된다
var octal = 0101;
var hex = 0x41;

//표기법만 다를 뿐 모두 같은 값이다.
console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary == octal);
console.log(binary == hex);

//정수 실수 구분없음
console.log(1 == 1.0);

console.log( 3 / 2 );


console.log(Number.POSITIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY == 1234/0);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY == -1234/0);
console.log(Number.NaN);
console.log(Number.NaN == 1 * "abcd");
console.log(Number.NaN == Number.NaN);

console.log( 3 / 0 );
console.log( -3 / 0 );
console.log( 0 / 0 );
console.log( 1 * "abcd");

console.log("=========================================")
var string = "hello";
var temp = `temp literal`;
console.log(temp);

