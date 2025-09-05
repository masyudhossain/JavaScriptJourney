const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("red")) {
            document.body.style.backgroundColor = "red";
        } else if (button.classList.contains("blue")) {
            document.body.style.backgroundColor = "blue";
        } else if (button.classList.contains("green")) {
            document.body.style.backgroundColor = "green";
        } else if (button.classList.contains("random")) {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            document.body.style.backgroundColor = randomColor;

        }
    });
});
