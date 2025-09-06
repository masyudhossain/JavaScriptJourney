let intervalId;

// Function to generate random color
function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("start").addEventListener("click", function () {
  if (!intervalId) { // Prevent multiple intervals
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomColor();
    }, 1000); // change color every 1 second
  }
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  document.body.style.backgroundColor = "white"; // reset to white
});
