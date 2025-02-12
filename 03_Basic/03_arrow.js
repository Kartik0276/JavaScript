const user = {
    username : "kartik",
    price : "999",

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


//--------------Arrow function----------
function chai(){
    let username = "Kartik"
    console.log(this.username) //console.log gives undefined becuse we can't use 'this' keyword in function
}

// chai()

const chat = function(){
    let username = "Kartik"
    console.log(this.username) //It also gives undefined
}

const check = () => {
    let username = "Kartik"
    console.log(this.username); //It's also gives undefined
}


const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(9,8))


// new way to write arrow function ----> Implicit return

const addThree = (num1, num2,num3 = 5) => num1+num2+num3
// const addThree = (num1, num2,num3 = 5) => (num1+num2+num3) //If we wrap by parenthesis , we don't have to use return keywor, if we use curly brases then we have to use 'return' keyword to reutn the value-----------------This is used in react

console.log(addThree(5,9))


//----- return object
const checkObj = () => ({username : "Kartik"}) //when we return any object from a function then we have to wrap up the object by parenthesis
console.log(checkObj())









