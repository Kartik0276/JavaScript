const myKey = Symbol("key1");

const Jsuser = {
    name: "Kartik",
    "full name": "Kartik Maity",
    age: 20,
    [myKey]: "mykey1",
    location: "Kolkata",
    email: "Kartikmaity60123@gmail.com",
    lastLoginDays: ["Sunday", "Monday"],
    
    // Function inside the object
    greeting: function() {
        console.log("Hello JS user");
    }
};

// Accessing properties
console.log(Jsuser.name);
console.log(Jsuser["lastLoginDays"]);
console.log(Jsuser["full name"]);

// Overwriting email correctly
Jsuser.email = "karitkmaity@gmail.com";

// Freezing the object
Object.freeze(Jsuser);

// This won't work because the object is frozen
Jsuser.age = 25; // No effect
console.log(Jsuser.age); // Still 20

// Calling the function
Jsuser.greeting();


