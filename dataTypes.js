"use strict";//treat all newer code as newer version

// alert(3+3)

// console.log(3 + 3)

let fullName = "Hossain"
let age = 25
let mailId = "ho2001ain@gmail.com"

// console.table([fullName, age, mailId])

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined =>

// console.log(typeof undefined)
// console.log(typeof null);

//Primitive
// 7 Types: String, Number, Boolean, null, BigInt, undefined, Symbol

const score = 100;

// Reference( Non Primitive)
// Array, Objects, Functions

const sahaba = ["Abubakkar", "Umar", "Usman", "Ali"];
let myObj = {
    usernName: "Masyud",
    age: 25
}
// console.log(myObj);
// console.log(sahaba);

//++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) and Heap(Non-primitive) Memory

// stack memory give a copy of data : Primitive dataType
let userName = "Masyud";
let userName1 = userName;

console.log(userName);
console.log(userName1);

//Heap memory give actual reference

let userOne = {
    email: "hossain@gmail.com",
    upi: "hossain@ybl"
}

let userTwo = userOne;

userTwo.email = "masyud@gmail.com"

console.log(userOne);
console.log(userTwo);


