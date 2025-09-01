const user = {// object
    userName: "Masyud",
    role: "backend-developer intern",
    stipened: 5000,

    welcomeMessage: function () {
        console.log(`I am ${this.userName}, a ${user.role} at Martian with ${user.stipened}`);
        console.log(this);
    }
}
// user.welcomeMessage()
// console.log(this)
// function chai() {
//     let userName = "Masyud"
//     console.log(this)
// }
// chai()
// console.log("hello");

const chai = () => {
    let userName = 'masyud'
    console.log(this.userName);
}

// chai()

// const addTwo = (num, num2) => 
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => ({ userName: 'Masyud' })


console.log(addTwo(3, 4));
