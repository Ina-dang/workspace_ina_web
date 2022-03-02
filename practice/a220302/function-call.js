const person = {
    firstName : "John",
    lastName : "Doe",
    fullName : function(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

console.log(person.fullName());