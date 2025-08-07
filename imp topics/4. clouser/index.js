// * Lexical Scope:
// Lexical scope is determined by the code structure. Variables and functions are accessible based on where they are defined.
let globalVar = "Global";
function outerFunction() {
  let outerVar = "Outer";
  function innerFunction() {
    console.log(globalVar); // Accessible
    console.log(outerVar); // Accessible
  }
  innerFunction();
}
outerFunction();

// * Closure:
// Closure is a feature in JavaScript where an inner function has access to the variables and parameters of its outer function, even after the outer function has finished execution.
function counter() {
  let count = 0;
  return {
    setValue: (value) => (count += value),
    getValue: () => count,
    increment: () => (count += 1),
    decrement: () => (count -= 1),
  };
}
const myCounter = counter();
myCounter.increment();
myCounter.setValue(50);
console.log(myCounter.getValue()); // Output: 51

// * Scope Chaining:
let e = 10; // Global scope
function sum(a) {
  return (b) => (c) => (d) => a + b + c + d + e; // Outer and local scopes
}
console.log(sum(1)(2)(3)(4)); // Output: 20

// * Output Based Questions:
// Q1: Shadowing
let value = 0;
(function printValue() {
  if (value === 0) {
    let value = 1; // Shadows outer `value`
    console.log(value); // Output: 1
  }
  console.log(value); // Output: 0
})();

// * Q2: Time Optimization with Closure
function find() {
  let a = Array.from({ length: 1000000 }, (_, i) => i * i);
  return (index) => console.log(a[index]);
}
const optimizedFind = find();
optimizedFind(5); // Output: 25

// * Module Pattern:
// Encapsulating private and public methods
let Module = (function () {
  let privateVar = "Private";
  function privateMethod() {
    console.log(privateVar);
  }
  return {
    publicMethod: () => {
      // privateMethod();
      console.log("Public");
    },
  };
})();
Module.publicMethod(); // Output: Private, Public

// * Run Function Only Once:
function once(fn) {
  let executed = false;
  return (...args) => {
    if (!executed) {
      executed = true;
      return fn(...args);
    }
  };
}
const initialize = once(() => console.log("Initialized"));
initialize(); // Output: Initialized
initialize(); // No output

// * Memoization:
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) cache[key] = fn(...args);
    return cache[key];
  };
}
const factorial = memoize((n) => (n === 0 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // Output: 120
console.log(factorial(5)); // Output: 120 (cached)

// * Difference Between Closure and Scope:
// Closure: A function with access to its outer function's variables.
// Scope: Accessibility of variables defined in a specific context.
function closureExample() {
  let outerVar = "Outer";
  return function innerFunction() {
    console.log(outerVar); // Access outer variable
  };
}
const inner = closureExample();
inner(); // Output: Outer
