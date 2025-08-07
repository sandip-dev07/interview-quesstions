let fname = "Sandip";
console.log(typeof fname); // "string"

// Even though 'fname' is a primitive string, we can use methods like .charAt
console.log(fname.charAt(2)); // 'n'

// Why does this work?
// Because JavaScript wraps primitive types (like string, number, boolean)
// into their respective wrapper class objects temporarily behind the scenes

let x = 10;
console.log(x.toFixed(2)); // "10.00"

// * Wrapper Classes:
// These are: String, Number, Boolean
// They allow primitive types to behave like objects

// JavaScript internally does this:
fname = new String("Sandip"); // now 'fname' is an object of type String
console.log(typeof fname); // "object"
console.log(fname.__proto__ === String.prototype); // true

// To verify it's an object with String methods
console.log(fname.__proto__); // [String: '', charAt: ƒ, ...]

// Conceptually:
let conceptual = {
  __proto__: String.prototype // JS links the primitive to the String prototype temporarily
};
