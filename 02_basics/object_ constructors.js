// Object Constructors
function Person (first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log("My father is " + myFather.age + " " + "old" + " " +  myMother.age + " " + "old")


// Constructor function for Person Objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create 2 Person Objects
const myName_1 = new Person("John", "Doe", 50, "blue");
const myName_2 = new Person("Sally", "Rally", 48, "green");

// Will Not Work
Person.nationality = "English";
Person.prototype.nationality = "English";
console.log("The nationality of my father is " + myName_1.nationality)

// Create a Person object
const newPerson = new Person("Avijit", "Mapatra", 50, "blue");
console.log(newPerson)


// Add a Name Method
myMother.changeName = function (name) {
  this.lastName = name;
}

// Change Name
myMother.changeName("santi");
console.log("My mother's last name is " + myMother.lastName)