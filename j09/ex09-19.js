//논리합(||)연산자
console.log('Cat' || 'Dog') // -> "Cat" ==> 빈 문자열이 아니라서 참
console.log(false || 'Dog') // -> "Dog"
console.log('Cat' || false) // -> "Cat"

//논리곱(&&)연산자
console.log('Cat' && 'Dog') // -> "Cat"
console.log(false && 'Dog') // -> false ==> false 만나서 오른쪽 안물어봄
console.log('Cat' && false) // -> false ==> Cat 맞아서 오른쪽 물어봤는데 오른쪽 false

