//for each loop

const myArr = [10, 20, 30, 40, 50]

myArr.forEach( function (item) {
    console.log(`The value is ${item}`)
} ) //call back function has not name


//Arrow function used example
myArr.forEach( function (item) {
    console.log(`The value is ${item}`)
} )

myArr.forEach( function (item, index, arr) {
    console.log(item, index, arr)
} )



//function is used as parameter
function printMe(item){
    console.log(item)
}

// myArr.forEach(printMe)



//---------------

const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },

    {
        languageName : "java",
        languageFileName: "java"
    },

    {
        languageName : "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(`Language Name : ${item.languageName} and Language File Name : ${item.languageFileName}`)
} );