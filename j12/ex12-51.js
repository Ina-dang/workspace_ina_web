//repeat 함수 단점 개선

//외부에서 전달받은 f를 n만큼 반복 호출한다
function repeat(n, f) { //고차함수
    for (var i = 0; i < n; i++) {
        f(i); //i를 전달하면서 f 를 호출
    }
}

var logAll = function(i){ //콜백함수
    console.log(i);
}

//반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) { //콜백함수
    if (i % 2 ) console.log(i);
}; 

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds); // 1, 3
