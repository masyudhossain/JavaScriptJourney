// Synchronous (blocking)
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// Async(asynchronous) means:
// The code doesn’t run line by line in a strictly blocking way — instead,
// some tasks can run in the background and finish later,
// while the rest of your program keeps running.
console.log("Task 1 async");

setTimeout(() => {
    console.log("Task 2 async (delayed)");
}, 2000); // runs after 2 seconds

console.log("Task 3 async");
/*
Why do we need async?

JavaScript runs on a single thread (one task at a time).
If everything was synchronous, your app would freeze while waiting for:
Server requests (API calls)
File reading
Database queries
Timers (like animations)
Async lets JavaScript schedule tasks so the UI doesn’t freeze.
*/