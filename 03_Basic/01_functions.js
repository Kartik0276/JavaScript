function sayMyName(){
    console.log("Kartik Maity")
}
// sayMyName()

function addTwoNumbers(number1, number2){ //Parameter
    console.log(number1 + number2)
}

addTwoNumbers(4,null) //Argument

function loginUserName(username){
    if(username === undefined){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserName())


//ecomerce cart
function calculateCartPrice(...num1){  //... rest operator
    return num1
}

console.log(calculateCartPrice(200,300,400))


//object passes in function
const user = {
    username : "Kartik",
    price : 499
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)