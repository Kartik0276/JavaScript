const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Add 10 with every element

const newNums = myNums.map( (num) => num + 10 )
// console.log(newNums)


//-------------chaining------------------

const newArr = myNums
    .map( (num) => num*10 )
    .map( (num) => num + 1)
    .filter( (num) => num >= 40 )  //This 'num' value depend on the first num*10 operation
console.log(newArr)