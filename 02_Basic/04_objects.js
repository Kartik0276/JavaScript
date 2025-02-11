const tinderUser = new Object() //Creation of object by constructor, also called singleton object
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.loggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "kart@gja",
    fullname:{
        userfullname:{
            firstname : "Martik",
            lastname : "Maity"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)



