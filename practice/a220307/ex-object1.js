
function Person (first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");

console.log(`My father is ${myFather.age} years old`);

const myMother = new Person("Madam", "Uppercut", 45, "brown");

console.log(typeof myMother);
console.log(typeof Person);

//adding a new property to and existing object
myFather.nationality = "English";

//adding a new Method to an existing object
myFather.name = function(){
    return this.firstName + " " + this.lastName;
}

console.log(myFather);
console.log(myMother);
console.log(myFather.name());




