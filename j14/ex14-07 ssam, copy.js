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
        decrease : decrease,
        register : function (){

        },
        modify : function (){

        },
        romove : function (){

        } //여기서 CRUD해서 자바는 진짜 서버제공만.. >> 이게 비동기처리쓰
    }
}());

//private variable은 외부로 노출되지 않는다.
console.log(Counter.num); //undefined

console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0

var replyService = (function(){

    var register = function(){
        console.log("댓글 작성 기능")
    }

    return {
        register : register,
        modify : function(){
            console.log("댓글 수정 기능")
        },
        remove : function(){
            console.log("댓글 삭제 기능")
        }
    }
}());

replyService.register();
replyService.modify();
replyService.remove();