const userEmail = "Kar@gmail.ai"

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// falsy values ------->>>>
// false, 0, -0(interview),  BigInt 0n, "", null, undefined, NaN

//Truthy values------------->>
// "0", "false", " ", [], {}, function(){}


//-----Check array is empty or not

const myArr = []
if(myArr.length === 0){
    console.log("The array is empty")
}


//---------Check object is empty or not

const myObj = {}
if(Object.keys(myObj).length === 0){   //Object.keys(myObj).length  -> This code returns an array, and by finding the length we check that the array or object is empty or not
    console.log("The object is empty")
}


//---------------------------
console.log(false == 0)

console.log(false == '')

//----------------------
//Nullish coalesching operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1)
val1 = null ?? 10
console.log(val1)


const num1 = undefined ?? 15
console.log(num1)


//----- Terniary operator

// condtion? ans1 : ans2
const number1 = 10
const number2 = 12

number1 < number2 ? console.log(`${number1} is less than ${number2}`) : console.log(`${number2} is less ${number2}`)
