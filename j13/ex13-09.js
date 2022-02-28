var x = 1;

function foo(){ //전역정의함수
    var x = 10;
    bar();
    console.log(x);//이거는 10
}

function bar() { //전역정의함수
    console.log(x);
}

foo();
bar();

//렉시컬 스코프 >> 어디에 속하냐

