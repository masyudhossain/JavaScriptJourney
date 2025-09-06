let promise = new Promise((resolve, reject) => {
    // Do some async task
    let success = false;

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Something went wrong!");
    }
});

promise
    .then(result => console.log(result))   // if resolved
    .catch(error => console.log(error))    // if rejected
    .finally(() => console.log("Task finished"));
