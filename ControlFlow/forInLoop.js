const myObject = {
    js: "javascript",
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}
for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject}`);

}

const programming = ['Java', 'python', 'c', 'c++', 'javascript']
programming.forEach((item) => {
    // console.log(item);
})

function printMe(item) {
    console.log(item);
}

// programming.forEach(printMe)

const myCoding = [
    {
        languageName: 'Java',
        extention: 'java'
    },
    {
        languageName: 'Python',
        extention: 'py'
    },
    {
        languageName: 'javascript',
        extention: 'js'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);

})

