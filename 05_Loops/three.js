// for of
const arr = [1,2,3,4,5]

// for (const element of object) {
    
// }

for(const element of arr){
    console.log(`Elemnt : ${element}`)
}

//Maps -> stores only unique values

const map = new Map()
map.set('In', "India")
map.set('USA', "Unites States of America")
map.set("Fr", "France")

console.log(map)

// for (const key of map){
//     console.log(key)
// }


for(const [key, value] of map){
    console.log(key, ' -> ', value)
}


const myObj = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

//we can't use for of loop like this in object

// for(const [key, value] of myObj){
//     console.log(key, ' -> ', value)
// }