const tinderUser = new Object() //Creation of object by constructor, also called singleton object
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.loggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "kart@gja",
    fullname:{
        userfullname:{
            firstname : "Kartik",
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


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

//extract value from course
//course.courseInstructor

const {courseInstructor} = course //De-structuring
// console.log(courseInstructor)


//API format
//object format and array format