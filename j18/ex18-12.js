const obj = {a:1};

//객체 리터럴 방식으로 생성한 객체의프로포타입 객체는 Object.prototype
console.log(obj.__proto__ === Object.prototype);
console.log(obj.__proto__);

console.log(typeof obj.__proto__);

