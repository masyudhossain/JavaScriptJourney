const prophets = ["Ibrahim", "Musa", "Isha"]
const prophets1 = ["Adam", "Nuh"]
// prophets.push(prophets1)
// console.log(prophets)
// console.log(prophets[3])
// console.log(prophets[3][0])


// const allProphets = prophets.concat(prophets1) // Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.
// console.log(allProphets);

const lastProphets = ["Muhammad(SAW)"]

const all_Prophets_till = [...prophets1, ...prophets, ...lastProphets]
console.log(all_Prophets_till);


console.log(Array.isArray("Masyud"));
console.log(Array.from("Masyud"));
console.log(Array.from({ name: "Masyud" }));

let score1 = 100
let score2 = 1002
let score3 = 1003
console.log(Array.of(score1, score2, score3));


