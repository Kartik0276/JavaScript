// Immediately Invoked Function Expression

(function chai(){
    //Named IIFE
    console.log("DB conected")
})();

// we use iife to decrease the pollution in global scope, it is used to invoke function automatically
// first parenthesis() -> is used to write the function deffination and the second is used to invoking 
//After writing the IIFE we have to add semicolon

//-------Example of arrow function in IIFE
( () => {
    //Unnamed IIFE
    console.log("DB conected two")
} )();


//----------Pass the parameter example through this IIFE
( (name) => {
    console.log(`My name is ${name}`)
} )('Kartik')