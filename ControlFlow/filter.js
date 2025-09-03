const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]

// const newNumber = number.filter((num) => num > 4)
const newNumber = number.filter((num) => {
    return num > 4
})
console.log(newNumber);

const books = [
    { bookName: "The Alchemist", genre: "Fiction", publishYear: 1988, edition: "1st" },
    { bookName: "Clean Code", genre: "Programming", publishYear: 2008, edition: "1st" },
    { bookName: "Atomic Habits", genre: "Self-help", publishYear: 2018, edition: "1st" },
    { bookName: "1984", genre: "Dystopian", publishYear: 1949, edition: "2nd" },
    { bookName: "Java: The Complete Reference", genre: "Programming", publishYear: 2019, edition: "11th" },
    { bookName: "The Pragmatic Programmer", genre: "Programming", publishYear: 1999, edition: "1st" },
    { bookName: "The Power of Now", genre: "Spirituality", publishYear: 1997, edition: "1st" },
    { bookName: "Introduction to Algorithms", genre: "Computer Science", publishYear: 2009, edition: "3rd" },
    { bookName: "Rich Dad Poor Dad", genre: "Finance", publishYear: 1997, edition: "2nd" },
    { bookName: "The Lean Startup", genre: "Business", publishYear: 2011, edition: "1st" }
];

const userBooks = books.filter((bks) => bks.genre === 'Programming')

const user1Books = books.filter((bks) => bks.publishYear >= 2000 && bks.genre === 'Programming')

// console.log(userBooks);
console.log(user1Books);
