const course = {
    courseName: "Java ultimate guide",
    price: "499",
    courseInstructor: "Masyud"
}

console.log(course.courseInstructor);

const { courseInstructor: instructor } = course // destructing
console.log(instructor);

//json - javascript object notation
[
    {},
    {},
    {}
]