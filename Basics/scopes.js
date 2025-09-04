// var c = 3000
let a = 200

if (true) {
    let a = 10
    const b = 20
    // var c = 40

}
// console.log(a);
// console.log(b);
// console.log(c);
/*-----------------------------------*/

function one() {
    const userName = "Masyud"
    function two() {
        const companyName = "Martian"
        console.log(userName);
    }
    two()
    // console.log(companyName); // get an error 
}
one()


if (true) {
    const userName = "masyud"
    if (userName === "masyud") {
        const companyName = "martian"
        console.log(userName + `@` + companyName);

    }
}