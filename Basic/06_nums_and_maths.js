const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// -----------------Maths----------------------

console.log(Math);
console.log(Math.abs(-44.45))
console.log(Math.round(45.5))
console.log(Math.ceil(45.5))
console.log(Math.floor(45.5))

console.log(Math.sqrt(25))

console.log(Math.min(3,4,53,6))
console.log(Math.max(3,4,53,6))


console.log(10*Math.random()) //Math.random() always give a number that lies between 0 to 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //this is way to generate random number in given range  