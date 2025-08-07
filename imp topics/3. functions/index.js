// * Function Declaration:
function test() {
  console.log("Hello World!");
}

// * Function Expression:
// A function assigned to a variable is called a function expression.
let square = function (num) {
  console.log(num * num);
};
// console.log(square(5));

// * What is a First-Class Function?
// A function is treated as a variable, meaning it can be passed as a parameter, returned from another function, or assigned to a variable.
function square2(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is:", fn(5));
}
// displaySquare(square2);

// * IIFE (Immediately Invoked Function Expression):
// A function that is executed as soon as it is defined.
(function sum(a, b) {
  //   console.log(a + b);
})(5, 2);

// * Function Scope:
// Variables defined inside a function cannot be accessed outside the function, as they are scoped to the function.

let num1 = 5;
let num2 = 10; // Using `let` for consistency
let num3 = 15;

function multiply() {
  return num1 * num2;
}
// console.log(multiply());

function getScore() {
  let num1 = 10;
  let num2 = 20;

  function add() {
    return num1 + num2;
  }
}
// console.log(getScore());

// * Output-Based Questions:
// Using `let` in a loop:
for (let i = 0; i < 10; i++) {
  // Each iteration creates a new scope for `i`.
  setTimeout(() => console.log(i), i * 1000);
}

// Using `var` in a loop:
for (var i = 0; i < 10; i++) {
  // `var` creates a single shared scope, so `i` gets updated globally.
  setTimeout(() => console.log(i), i * 1000);
}

// To avoid the above issue with `var`, use an IIFE:
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(() => console.log(j), j * 1000);
  })(i);
}

// * Function Hoisting:
// Function declarations are hoisted, meaning they can be used before they are defined.
// Function expressions, however, are not hoisted.

// * Parameters vs Arguments:
// - Parameters are the placeholders in the function definition.
// - Arguments are the actual values passed to the function during the call.

function num(value) {
  // `value` is a parameter.
  console.log(value);
}
num(5); // 5 is an argument.

// Example with `arguments` object (not available in arrow functions):
function fn() {
  console.log(arguments); // Logs: [1, 2, 3, 4]
}
fn(1, 2, 3, 4);

// * Rest vs Spread Operator:
// Rest collects values into an array.
function multiply2(...nums) {
  console.log(nums[0] * nums[1]);
}

let arr = [5, 6];
multiply2(...arr); // Spread operator spreads the array into individual elements.

const fnRest = (a, x, y, ...nums) => {
  // Rest operator collects remaining arguments into an array.
  console.log(x, y, nums); // Logs: 6 7 [8, 9, 10, 11]
};
fnRest(5, 6, 7, 8, 9, 10, 11);

// * Callback Function:
// A callback function is passed into another function as an argument and is executed inside the outer function to complete some action.
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
// Output:
// Hello, John!
// Goodbye!
