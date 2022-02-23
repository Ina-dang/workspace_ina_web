var score = 80;

var copy = score;

console.log(score, copy);
console.log(score == copy);

score = 100;

console.log(score, copy);
console.log(score == copy);


console.log("==============")

var o = { a: 1 };
var o2 = o;
o.a = 2;
o.b = 3;
console.log(o)
console.log(o2.a);

var arr = [1,2,3];
var arr2 = arr;
arr[1] = 10;
console.log(arr2);


//로그인 개념

//List<User> users = ..... ::사용자들의 정보
// User user = user.get(2);

// 회원 정보 수정
//user.setPassword(....); ==> 얘를 바꾸면 위의 users내 user정보 바뀜 (주소 참조를 같이 하고있기 때문)

// List<Student> students = new ArrayList<>();

//ArraryList 타입의 인스턴스를 생성 후 (new 는 연산자, 생성자호출)
//해당 주소를 Student 인스턴스가 들어갈 수 있는 List 타입의 students객체에 할당


