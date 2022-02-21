// for (var i = 0 ; i < 2 ; i ++) {
//     console.log(i)
// }

//1-100 합계구하기
var sum = 0;
for (var i = 0 ; i <= 100 ; i++) {
    console.log(i);
    sum += i;
}
console.log(sum);

//1-50 홀수
for (var i = 1 ; i <= 50 ; i++) {
    // console.log( i );
    // i++;
    if( i % 2){
        console.log(i)
    }
}

//구구단
for (var i = 2 ; i <= 9 ; i++ ) {
    for (var j = 1 ; j <= 9 ; j++) {
        console.log( i + "*" + j + "=" + i*j );
    }
}