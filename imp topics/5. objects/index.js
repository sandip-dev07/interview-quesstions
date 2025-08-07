// * Objects:
// Objects are a collection of key-value pairs.

const user = {
  name: "Sandip",
  age: 25,
};

// Delete a property:
delete user.age;
console.log(user.age); // Output: undefined

// Accessing properties:
console.log(user["age"]); // Output: undefined (after deletion)

// * Dynamically Add Key-Value Pair:
let key = "name";
let value = "Sandip";

const names = {
  [key]: value,
};
console.log(names); // Output: { name: "Sandip" }

// * For-in Loop:
const users = {
  name: "Sandip",
  age: 25,
  is_new: true,
};
for (key in users) {
  console.log(`${key} : ${users[key]}`);
  // Output:
  // name : Sandip
  // age : 25
  // is_new : true
}

// * Multiply Numeric Properties by 2:
function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  console.log(obj);
}

let nums = {
  a: 100,
  b: 200,
  title: "my num",
};

multiplyByTwo(nums);
// Output: { a: 200, b: 400, title: "my num" }

// * Output of Code:
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // b is converted to "[object Object]"
a[c] = 456; // c is also converted to "[object Object]"
console.log(a[b]); // Output: 456 (last value assigned to "[object Object]")

// * JSON.stringify and JSON.parse:
// `JSON.stringify` converts a JavaScript object into a JSON string.
// `JSON.parse` converts a JSON string back into a JavaScript object.
const obj = { name: "Sandip", age: 25 };
const jsonString = JSON.stringify(obj); // '{"name":"Sandip","age":25}'
console.log(jsonString);

const parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // Output: { name: "Sandip", age: 25 }

// * Guess Output:
const value2 = { num: 10 };

multiply = (x = { ...value2 }) => {
  console.log((x.num *= 2));
};

multiply(); // Output: 20 (x is a copy of value2, num is modified locally)
multiply(); // Output: 20 (x is a new copy again, num reset to original value)
multiply(value2); // Output: 20 (modifies the original value2.num)
multiply(value2); // Output: 40 (value2.num was modified previously)
