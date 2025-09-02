(function say() {
    console.log("Assalamualikum");
})();

/*
Avoid Polluting Global Scope
In JavaScript, variables declared in the global scope can cause conflicts.
An IIFE creates a private scope, so variables/functions don’t leak into global scope.
*/


// Named IIFE
(function abc() {
    console.log("This is a named IIFE");
})();

// Anonymous IIFE
(function () {
    console.log("This is an anonymous IIFE");
})();

((userName) => {
    console.log("This is iffe arrow function");

})('Masyud')
