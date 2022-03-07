

function Person(first, last, age, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather.nationality);

Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

console.log(myFather.name());