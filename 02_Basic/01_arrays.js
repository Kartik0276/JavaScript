//Array
const myArr = [0, 1,2,3,4 ]
//shallow copy

const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(2,3,4,5)
console.log(myArr2[3]);
console.log(myArr.length)

//-----------------methods in array----
myArr.push(10);
console.log(myArr)
myArr.pop()
console.log(myArr)


//unshift --- Allows the element to add in first place
myArr.unshift(99)
console.log(myArr)

myArr.shift();
console.log(myArr)

//Question----
console.log(myArr.includes(99))


const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

console.log(typeof newArr)
console.log(typeof myArr)


// slice , splice
console.log("A", myArr); //Before slice operation
const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("A" , myArr);

//splice
const myn2 = myArr.splice(1,3); //splice method delete the spliced portion
console.log(myn2);
console.log("B" , myArr)