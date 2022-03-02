var Counter = (function(){
    //private 변수
    var num = 0;

    function increase(){
        return ++num; //지역함수
    }

    function decrease(){
        return --num;
    }

    return {
        increase : increase,
        decrease : decrease
    }
}());

//private variable은 외부로 노출되지 않는다.
console.log(Counter.num); //undefined

console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0
