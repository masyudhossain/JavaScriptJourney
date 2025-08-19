//object literals

const mySym = Symbol("Key1")

const SIOMember = {
    full_Name: "Masyud Hossain",
    age: 25,
    [mySym]: "myKey1",
    location: "Kolkata,West Bengal",
    email: "masyud@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(SIOMember.full_Name);
// console.log(SIOMember["full_Name"]);
// console.log(SIOMember[mySym]);
// console.log(typeof mySym);

// console.log(SIOMember);

SIOMember.email = "hossain@amazon.com"
// console.log(SIOMember.email);

// Object.freeze(SIOMember)
SIOMember.email = "hossain@gmail.com"

// console.log(SIOMember);



SIOMember.greeting = function () {
    console.log(`Assalamualikum ${this.full_Name}, welcome to SIO`);
}

console.log(SIOMember.greeting());
