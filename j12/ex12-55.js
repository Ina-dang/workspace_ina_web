// 콜백 함수를 사용하는 고차 함수 map ==> 한개 입력하면 한개리턴
var res = [1,2,3].map(function(item){
    return item * 2;
// }).map; --chaning 가능
});
console.log(res);

// 콜백 함수를 사용하는 고차 함수 filter
var res = [1, 2, 3].filter(function(item){
    return item % 2;
}); //프리디케이트 >> 조건식 리턴 >> 불린값리턴
console.log(res);

//filter 화살표함수
var res = [1, 2, 3].filter(item => item % 2);
console.log(res);

// 콜백 함수를 사용하는 고차 함수 reduce
var res = [1, 2, 3, 4].reduce(function (acc, cur) {
    console.log(acc, cur);
    return acc + cur;
}, 0);
console.log(res);

//reduce 화살표함수
var res = [1, 2, 3, 4].reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
}, 0)
console.log(res);
