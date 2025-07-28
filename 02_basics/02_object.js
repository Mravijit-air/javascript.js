const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
}
delete person.age
console.log(person.firstname + " is " + person.age + " years old.");

let x='firstname';
let y='age'
console.log(person[x] + " is " + person[y] + " years old.")

const personName = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
console.log(personName["firstname"] + " is " + personName["age"] + " years old.")

const newPerson = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};

newPerson.newName = 'Baby'
console.log(newPerson.firstname + ' ' + newPerson.newName)


// Object Methods
const Methods ={
    irstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName:function name() {
      return this.firstName + " " + this.lastName;
    }
}

console.log(Methods.id)

const fruits = {Bananas:300, Oranges:200, Apples:500}; 
let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}

console.log(text)

// Create an Object
const ObjectPerson = {
  name: "John",
  age: 30,
  city: "New York"
};
const AllName = Object.values(ObjectPerson);
console.log(AllName)

// Create an Object
const CardName = {
  name: "Avijit",
  age: 24,
  city: "Bhubaneswar"
};
let CardName_Text = "";

for (let x in CardName) {
  CardName_Text += CardName[x] + " ";
};

console.log(CardName_Text)

const personOutput = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(personOutput)



