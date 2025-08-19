// singleton
const instaUser = new Object() // singleton object 
instaUser.id = "132"
instaUser.name = "Hossain"
instaUser.isLoggedIn = true
// console.log(instaUser);

const faceUser = {
    email: "hossain@google.com",
    full_name: {
        first_Name: "Masyud",
        last_Name: "Hossain"
    }


}

// console.log(faceUser);

console.log(faceUser.full_name?.first_Name);
// console.log(faceUser.email.primary?.email)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

const obj3 = { obj1, obj2 }

const obj4 = Object.assign({}, obj1, obj2) // (target,source)
// console.log(obj3)
console.log(obj4);

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    }
]

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(Object.hasOwnProperty('namew'));
console.log(Object.hasOwnProperty('name'));
