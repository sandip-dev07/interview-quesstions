### 🧠 `reduce()` in JavaScript

The `reduce()` method is used to **reduce an array to a single value** by executing a **callback function** on each element, one by one.

---

## ✅ Basic Syntax:

```
array.reduce((accumulator, currentValue) => {
  // logic
  return updatedAccumulator;
}, initialValue);
```

* `accumulator`: the accumulated result.
* `currentValue`: current element in the array.
* `initialValue`: (optional) starting value of the accumulator.

---

## 🔹 Example 1: Sum of Numbers

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15
```

---

## 🔹 Example 2: Find Maximum

```javascript
const numbers = [5, 8, 2, 9, 3];

const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc));

console.log(max); // 9
```

---

## 🔹 Example 3: Count Occurrences

```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }
```

---

## 🔹 Example 4: Flatten an Array

```javascript
const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1, 2, 3, 4, 5]
```

---

## 💡 When to Use `reduce()`:

* Summing values
* Grouping or counting items
* Transforming arrays into objects
* Flattening nested structures
* Chaining operations without using multiple loops

---

Would you like a visual diagram to explain how `reduce()` processes an array step-by-step?
