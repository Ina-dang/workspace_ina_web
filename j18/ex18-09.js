function foo(func) {
    return func();
}

function bar() {
    return 'caller : ' + bar.caller ;
}

//브라우저에서 실행해야한다
console.log(foo(bar));
console.log(bar());