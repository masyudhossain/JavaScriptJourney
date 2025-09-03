const arr = [2, 3, 4, 5, 6]
for (const number of arr) {
    // console.log(number);
}

const greetigs = "Hello world!"
for (const greet of greetigs) {
    // console.log(greet);
}

//map

const countryCode = new Map()
countryCode.set('IN', "India")
countryCode.set('USA', "United state of America")
countryCode.set('Fr', "France")

console.log(countryCode);

for (const [key, values] of countryCode) {
    console.log(key, ':-', values);

}