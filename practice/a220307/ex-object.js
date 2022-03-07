
const person = {
    firstName : "John"
    , lastName : "Doe"
    , age : 50
    , eyeColor : "blue"
};

console.log(`${person.firstName} ${person.lastName}`);

const x = person;
x.age = 10; 
console.log(x.age);
console.log(person.age);

person.age = 50;
console.log(x.age);
console.log(person.age);

console.log(`${person.firstName} is ${person.age} years old`);
console.log(person["firstName"] + " is " + person["age"] + " years old");

person.nationality = "English";
console.log(person);

delete person.nationality;
console.log(person);

myObj = {
    name : "John",
    age : 30,
    cars : {
        car1 : "Ford",
        car2 : "BMW",
        car3 : "fiat"
    }
}

console.log(myObj);
console.log(myObj.name + " " + myObj.cars.car1);
console.log(myObj.name + " " + myObj["cars"]["car2"]);

let p1 = "cars";
let p2 = "car2";
console.log(myObj.name + " " + myObj[p1][p2]);

myObj1 = {
    name : "John",
    age : 30,
    cars : [
        {name : "Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name : "BMW", models:["320", "X3", "X5"]},
        {name : "Fiat", models:["500", "Panda"]}
    ]
}

let y = "";
//for in loop를 통해 객체 탐색
for (let i in myObj1.cars){
    y += "\n" + myObj1.cars[i].name + "\n";
    for (let j in myObj1.cars[i].models) {
        y += myObj1.cars[i].models[j] + "\n";
        
    };
    console.log(y);
}

