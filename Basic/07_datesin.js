let myDate = new Date()
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


//Self creation of data
let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString())


let myCreatedDatenew = new Date(2023,0,23,5,3);
console.log(myCreatedDatenew.toLocaleString())

let myCreatedDateAnother = new Date("2024-02-20") //yyyy-mm-dd
console.log(myCreatedDateAnother.toLocaleString())

//Time stamp in data
let myTimeStamp = Date.now()
console.log(myTimeStamp);

//This is the way to convert mili seconds to seconds
let getSeconds = Math.round((Date.now()/1000))
console.log(getSeconds);

let today = new Date();
console.log(today.getTime());