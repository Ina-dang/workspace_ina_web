
foo : { //foo라는 식별자가 붙은 레이블 블록문
    var i;
    console.log(i);
    break foo;
    var j;
    console.log(j);
}
// for( ; ; ) {}