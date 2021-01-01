console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

/**
 * Defining a simple function:
 * use the const keyword 
 * followed by the name you want to give the function,
 * followed by the equal sign (=) and the function keyword,
 * followed by parentheses (the ( and ) characters).
 * The statements you want the function to contain are enclosed between braces (the { and } characters).
 */
const myFunc1 = function () {
    console.log("This statement is inside the function 1");
};

// You can also define functions so you don't have to explicitly create and assign a variable.
function myFunc2() {
    console.log("This statement is inside the function 2"); }

console.log("This statement is outside the functions");

myFunc1();
myFunc2();