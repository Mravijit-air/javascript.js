const arrayOne = ["Sipuna", "Avijit", "Aditya", "Chotu"]
const arrayTwo = ["Papu", "Sibu", "Litu", "Chotu"]

// arrayOne.push(arrayTwo) 
// arrayTwo.pop(arrayOne) 
// console.log(arrayOne);

// const allArray=arrayOne.concat(arrayTwo)
// console.log(allArray)

// const all_array= [...arrayOne,...arrayTwo];
// console.log(all_array)


const another_array = [1, 2, 3, 4, [5, 6, 7], 8, [33, 34]]
const all_another_array=another_array.flat(Infinity)
console.log(all_another_array)

console.log(Array.isArray("Avijit Mahapatra"))
console.log(Array.from("Avijit Mahapatra"))
console.log(Array.of("Avijit Mahapatra"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
