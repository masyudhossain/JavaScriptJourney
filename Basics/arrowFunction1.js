const employee = {
    employeeName: "masyud",
    stipened: "5000",

    welcomeMessage: function () {
        console.log(`${this.employeeName}, welcome to Martian`);
        console.log(this);

    }
}

// employee.welcomeMessage()
// employee.employeeName = 'Saquib'
// employee.stipened = 8000
// employee.welcomeMessage()

console.log(this); // current content {}

function chai() {
    console.log(this);
}
function employee() {
    let userName = 'masyud'
    console.log(this.userName);
}
chai()
employee()