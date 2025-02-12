//-------------reduce--------------- 

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc : ${acc} currval : ${currval}`)
    return acc + currval
}, 0) //This '0' is taken by the accumulator by initial value

console.log(myTotal)



//-------------now use arrow function in place of normal funciton

const myArr = [1, 2, 3, 4, 5, 6, 7, 8]
const totalVal = myArr.reduce( (acc, currVal) => (acc + currVal), 0 )

console.log(totalVal)


//--------------------------------

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science",
        price: 12999
    },
    
]

const totalPrice = shoppingCart.reduce( (acc, item) => (item.price + acc), 0 )

console.log(totalPrice)