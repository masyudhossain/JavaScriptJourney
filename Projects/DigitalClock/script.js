const clock = document.getElementById('clock');
// OR you could use: const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();   // Get current local date & time
    // console.log(date.toLocaleTimeString()); // (For debugging)
    clock.innerHTML = date.toLocaleTimeString(); // Show only the time
}, 1000);
