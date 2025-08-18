let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createdDateAt = new Date(2025, 7, 1)
let createdDateAt = new Date("2001-04-04")
// console.log(createdDateAt.toDateString());

// let myTimesStamps = Date.now()
// console.log(myTimesStamps);
// console.log(createdDateAt.getTime());
// console.log(Math.floor(Date.now() / 1000)); // in second

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));


