const name = "Kartik"
const repoCount = 50

// console.log(name + repoCount) //old or outdated way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //This way is called string interpolation


const gameName = new String('Kartik-Fc')

console.log(gameName[0])
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('F'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,-5);
console.log(anotherString)

const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())  //trim() used to delete the white space

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('kartik'))


console.log(gameName.split('-'))