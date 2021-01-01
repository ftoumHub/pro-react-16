console.log("========== 1. Using Statements ==========");

console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");


console.log("========== 2. Defining and Using Functions ==========");

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

console.log("This statement is outside the function 1");
myFunc1();

// You can also define functions so you don't have to explicitly create and assign a variable.
function myFunc2() {
    console.log("This statement is inside the function 2");
}
myFunc2();


console.log("========== 2.1 Defining Functions with Parameters ==========");

function myFunc3(name, weather) {
    console.log(`Hello ${name}.`);
    console.log(`It is ${weather} today.`);
}
myFunc3("Georges", "sunny");


console.log("========== 2.1.1 Using Default and Rest Parameters ==========");

// Using a default Parameter
function myFunc4(name, weather = "raining") {
    console.log(`Hello ${name}.`);
    console.log(`It is ${weather} today.`);
}
myFunc4("Georges");

// Using a Rest Parameter
function myFunc5(name, weather, ...extraArgs) {
    console.log(`Hello ${name}.`);
    console.log(`It is ${weather} today.`);

    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
}
myFunc5("Georges", "muddy", "one", "two", "three");



console.log("========== 2.2 Defining Functions that Return Results ==========");

function myFunc6(name) {
    return (`Hello ${name}.`);
}
console.log(myFunc6("Georges"));


console.log("========== 2.3 Using Functions as Arguments to Other Functions ==========");

// Using a function as an argument
function myFunc7(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}
console.log(myFunc7(function () {
    return "Georges";
}));

// Chaining function calls
function myFunc8(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}
function printName(nameFunction, printFunction) {
    printFunction(myFunc8(nameFunction));
}
printName(function () { return "Georges" }, console.log);


console.log("========== 2.3.1 Using Arrow Functions ==========");

const myFunc9 = (nameFunction) => ("Hello " + nameFunction() + ".");

const logName = (nameFunction, printFunction) => printFunction(myFunc9(nameFunction));

logName(function () { return "Georges" }, console.log);


console.log("========== 3. Using Variables and Types ==========");

// The let keyword is used to declare variables and, optionally, assign a value to the variable in a single 
// statement—as opposed to the const keyword I used in earlier examples, which creates a constant value that 
// cannot be modified.