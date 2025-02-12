//if

// if(condition){  conditon must be true, to execute the scope code
//     //scope
// }

//---------------example------------------
// operators -> >, <, <=, >=, ==, ===, !=, !==

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("User is logged in now")
}

if(2 == "2"){ //== operator don't check the type, === check the data type
    console.log("Executed")
}

let temperature = 1
if(temperature){
    console.log("Temp")
}
else{
    console.log("temppp")
}


const balance = 200;
if(balance > 20) console.log("Hii")

//----------------Nesting----------------

// if(condition){

// }
// else if(condition){

// }
// else{

// }

const login = true
const money = true
if(login && money){
    console.log("Allow to buy course")
}

// if(condition || condition){

// }

