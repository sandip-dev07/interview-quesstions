// * What is Scope?
// -> Scope refers to a certain region of a program where defined variable exists and can be accessed.
//    Beyond this region, the variable is inaccessible.
// There are three main types of scope:
// 1. Global Scope
// 2. Block Scope
// 3. Function Scope
// - `var` has function scope.
// - `let` and `const` have block scope (hoisted in the Temporal Dead Zone, TDZ).

// * Hoisting:
// In JavaScript, before code execution, all variable and function declarations are moved to the top of their scope.
// This process is called hoisting. Note that `let` and `const` are hoisted but remain uninitialized in the TDZ.

// * Shadowing:
function test() {
  let a = "hello";

  if (true) {
    let a = "World"; // Shadowing variable 'a' from the outer scope
    console.log(a); // Output: World
  }
  console.log(a); // Output: hello
}

// test();

// * Temporal Dead Zone (TDZ):
// -> A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible
//    until it is initialized with a value. Attempting to access it before initialization
//    results in a ReferenceError.
