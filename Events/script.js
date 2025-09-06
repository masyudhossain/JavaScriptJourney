// Button click
document.getElementById("btnClick").addEventListener("click", () => {
    alert("Button was clicked!");
});

// Image mouseover & mouseout
const img = document.getElementById("myImage");
img.addEventListener("mouseover", () => {
    img.style.border = "5px solid green";
});
img.addEventListener("mouseout", () => {
    img.style.border = "none";
});

// Input field events
const input = document.getElementById("myInput");
input.addEventListener("focus", () => {
    input.style.background = "lightyellow";
});
input.addEventListener("blur", () => {
    input.style.background = "";
});
input.addEventListener("input", () => {
    console.log("You typed:", input.value);
});

// Hover box
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background = "orange";
});
hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "lightblue";
});

// Double click
const para = document.getElementById("dblPara");
para.addEventListener("dblclick", () => {
    para.style.color = para.style.color === "red" ? "black" : "red";
});

// Form submit
document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted!");
});

// Keyboard events
document.addEventListener("keydown", (event) => {
    document.getElementById("keyOutput").textContent = event.key;
});

// Change event on dropdown
const select = document.getElementById("mySelect");
select.addEventListener("change", () => {
    document.getElementById("selectedColor").textContent = select.value || "None";
});

// Right-click (contextmenu)
const rightClickPara = document.getElementById("rightClick");
rightClickPara.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // stop default context menu
    alert("Custom right-click event triggered!");
});

// Scroll event
const scrollArea = document.getElementById("scrollArea");
scrollArea.addEventListener("scroll", () => {
    console.log("Scroll position:", scrollArea.scrollTop);
});

// Window resize
const resizeOutput = document.getElementById("resizeOutput");
function updateSize() {
    resizeOutput.textContent = `Window size: ${window.innerWidth} x ${window.innerHeight}`;
}
window.addEventListener("resize", updateSize);
updateSize(); // call on load
