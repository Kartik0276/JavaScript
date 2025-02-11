const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros)  //concat method returns new array
console.log(allHeros)

//there is also another operator to concat
//operator is spread
const all_newHeros = [...marvel_heros, ...dc_heros]
console.log(all_newHeros)

const anotherArray = [1,2,3, [3,4,5], 4,5,[2,3,[4,5]]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray)

console.log(Array.isArray("Kartik")) //check that the given string is an array or not

console.log(Array.from("Kartik")) //convert the name to the array

console.log(Array.from({name:"Kartik"})) //intersting for interview purpose


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //make array from the given number
