//Stack(primite data storing), Heap(Non-primitive data storing)


let myName = "Kartik" //Stored in stack

let anotherName = myName
anotherName = "Hardik"
console.log(myName)
console.log(anotherName)

//-----------------------

//Non-primitve storing
let userOne = {
    email: "karitkmaity60123@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "karitkmaity507@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

//Two log print same email, userTwo holds the refernce of userOne