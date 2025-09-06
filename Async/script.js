const salam = function () {
    document.querySelector('h1').innerText = "Walaikum assalam";
}
const reply = setTimeout(salam, 2000)

document.querySelector('button').addEventListener('click', function () {
    clearTimeout(reply)
    console.log("Stopped");

})
