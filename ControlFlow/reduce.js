const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currval ${currVal}`);

//     return acc + currVal
// }, 3)


const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal);

let shoppingCart = [
    { itemName: "Laptop", price: 55000 },
    { itemName: "Smartphone", price: 25000 },
    { itemName: "Headphones", price: 3000 },
    { itemName: "Keyboard", price: 1500 },
    { itemName: "Backpack", price: 2000 },
    { itemName: "Mouse", price: 800 }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
