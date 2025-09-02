const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Allow access, user logged in");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, NaN

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");

}

//nullish coalescing operator
let val;
// val = 5 ?? 10
// val = null??10
val = undefined ?? 10

console.log(val);

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

