// Select elements
const keyElement = document.getElementById("key");
const keyCodeElement = document.getElementById("keyCode");
const eventTypeElement = document.getElementById("eventType");

// Handle key press with setTimeout (async simulation)
function handleKeyPress(event) {
    const pressedKey = event.key === " " ? "Space" : event.key;

    // Show initial key info
    keyElement.textContent = pressedKey;
    keyCodeElement.textContent = event.keyCode;
    eventTypeElement.textContent = "keydown (processing...)";

    // Asynchronous simulation using setTimeout
    setTimeout(function () {
        eventTypeElement.textContent = `✅ Key "${pressedKey}" processed!`;
    }, 1000); // runs after 1 seconds (async)
}

// Attach listener
document.addEventListener("keydown", handleKeyPress);
