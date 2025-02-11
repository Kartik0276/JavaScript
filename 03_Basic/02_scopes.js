let a = 10
const b = 20
var c = 30
{
    var d = 40
    let e = 50
}
console.log(d) //this is why we don't use var because it not has block scope
// console.log(e)

const array = [34, 54, 54, 90]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}