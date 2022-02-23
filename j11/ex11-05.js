var str = 'string';

str[0] = 'Z'; 
//문자열은 원시값으로 변경되지않음 ,but 에러발생 x

console.log(str[0]);

str = "abcd";

console.log(str);
console.log(str[0]);