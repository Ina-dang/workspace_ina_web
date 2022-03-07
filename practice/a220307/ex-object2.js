function Person(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    }
  }

  const myMother = new Person("Sally", "Rally", 48, "Brown");
  console.log("My mother's last name is " + myMother.lastName);
  
  myMother.changeName("Doe");
  console.log("My mother's last name is " + myMother.lastName);


  const x1 = new String();
  console.log(typeof x1);

