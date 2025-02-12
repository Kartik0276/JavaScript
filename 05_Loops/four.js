const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swipt: "Swift by apple"
}

//------ for in loop----------

//for in loop used in object example
for (const key in myObj) {
    console.log(`This is the key: ${key} and the value is: ${myObj[key]}`)
}



//for in loop used in array example
const myArr = ["js", "ruby", "python", "java", "cpp"]

for(const key in myArr){
    console.log(myArr[key])
}

//for loop used in map example

//map is not iteratable in this way
const map = new Map()
map.set('In', "India")
map.set('USA', "Unites States of America")
map.set("Fr", "France")

for(key in map){
    // console.log(map[key])
}