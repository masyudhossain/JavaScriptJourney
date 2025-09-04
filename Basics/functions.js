function printMyName() {
    console.log("M");
    console.log("A");
    console.log("S");
    console.log("Y");
    console.log("U");
    console.log("D");
}

// printMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);

// }
function addTwoNumber(number1, number2) {
    return number1 + number2
}

const result = addTwoNumber(5, 9)
// console.log(result);

// function loginUserMessage(userName) {
//     return `${userName} just logged in`
// }

function loginUserMessage(userName) {
    if (!userName) {
        console.log("Please enter a userName");
        return null
    }
    return `${userName} just logged in`
}
function loginUserMessage(userName = 'Ali') {
    if (!userName) {
        console.log("Please enter a userName");
        return null
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Masyud"));
// console.log(loginUserMessage());

function calculateCartPriceOne(num1) {
    return num1
}
function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPriceOne(100));


// console.log(calculateCartPrice(100, 200, 39883))

const book = {
    bookName: "Java",
    price: 200
}

const employee = {
    employeeName: "Masyud",
    degisnation: "Backend Developer intern",
    stipend: 5000
}

function employeeDetails(ob) {
    console.log(`Employee name is ${ob.employeeName}, degisnation ${ob.degisnation} and stipend amount is ${ob.stipend}`);

}
employeeDetails(employee)

function handleObject(anyobject) {
    console.log(`This is a ${anyobject.bookName} book and price is ${anyobject.price}`);
}

// handleObject(book)
handleObject({ // direact object pass
    bookName: "javaScript",
    price: 200
})

// const newArray = [1, 2, 3, 4, 5]

// function returnSecondValue(anyArray) {
//     return anyArray[1]
// }

// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([100, 200, 300, 9000]));
