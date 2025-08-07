// * Map, Filter, Reduce:
// These are array methods used to iterate over array elements to perform computations or transformations.
// Each method behaves differently and may or may not return a new array based on the provided callback function. and also all these methods allows chaining

// * What is map()?
// `map` is used to iterate through each element in an array and apply a transformation or computation.
// It always returns a new array with the transformed elements, leaving the original array unchanged.

let array = [0, 1, 2, 3, 4];
const newArr = array.map((it, index) => {
  return it * 2 + index;
});
// console.log(newArr); // Output: [0, 3, 6, 9, 12]

// * What is forEach()?
// `forEach` is used to execute a function on each element of an array but does NOT return a new array.
// It is often used for side effects, like logging or modifying external variables.

array.forEach((it, index) => {
  console.log(`Element: ${it}, Index: ${index}`);
});

// * map vs forEach:
// - `map` returns a new array with transformed elements, while `forEach` does not return anything.
// - Use `map` when you need a new array with transformed data. and also we can chain with other methods
// - Use `forEach` for operations like logging or external state modifications.

// * What is filter()?
// `filter` is used to create a new array containing elements that satisfy a specific condition (i.e., the callback function returns `true`).

const filteredArr = array.filter((it) => {
  return it % 2 === 0;
});
console.log(filteredArr); // Output: [0, 2, 4]

// * What is reduce()?
// `reduce` is used to accumulate array elements into a single value by applying a callback function.
// - `acc`: The accumulator that stores the result of previous computations.
// - `curr`: The current element being processed.

const reducedArr = array.reduce((acc, curr) => acc + curr, 0);
// Initial value of `acc` is 0.
console.log(reducedArr); // Output: 10
