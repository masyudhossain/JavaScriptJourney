// arrays
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);
// console.log(myArr[0]);

const fruits = ["mango", "apple", "banana"]
// console.log(fruits);


const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2)

// Arrays methods

// myArr2.push(6)
// console.log(myArr2);
// myArr2.push(8)
// console.log(myArr2);
// myArr2.pop()
// console.log(myArr2);

// myArr2.unshift(9) // element are inserted in the first of the array, time consunimg of large number of arrays
// console.log(myArr2);
myArr2.shift()
// console.log(myArr2);

// console.log(myArr2.includes(9));
// console.log(myArr2.includes(4));

// const newArr = myArr2.join()
// console.log(newArr);
// console.log(typeof newArr);

console.log("A ", myArr);

const myArr3 = myArr.slice(1, 3) // not modifies the original arrays
console.log(myArr3);
console.log("B ", myArr);

const myArr4 = myArr.splice(1, 3); // modifies the original arrays
console.log("C ", myArr);
console.log(myArr4);





