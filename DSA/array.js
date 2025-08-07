const arr = [1, 2, 3, 4, 5, { name: "vscode" }, true, [6, 7, 9, 10]];
const arr2 = [100, 101, 102, 103];

arr.push("Sam");

// for (const i of arr) {
//   console.log(i);
// }

const isEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const findEle = (arr, ele) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele || isEqual(arr[i], ele)) {
      return i;
    }
  }
  return -1;
};

// console.log(findEle(arr, { name: "vscode" }));

// update array:
const updateArray = (arr, index, value) => {
  arr[index] = value;
  return arr;
};

// console.log(updateArray(arr, 1, "hello"));

// remove element from array
const removeElement = (arr, value) => {
  arr.splice(findEle(arr, value), 1);
  return arr;
};

// console.log(removeElement(arr, { name: "vscode" }));

arr.splice(0, 1); //splice: mutates the original array
const newArr = arr.slice(0, 2); //slice: returns a new array
// console.log(arr);

// console.log(newArr);

// shallow copy:
const arrB = arr;
// console.log(arrB);

// Deep copy:
const arrC = [...arr]; // spread operator
const arrD = Array.from(arr);
arrC.splice(1, 4);
// console.log(arr);
// console.log(arrC);
// console.log(arrD);

// add two array:
// const arr3 = [...arr, ...arr2];
const arrE = arr.concat(arr2);
console.log(arrE);

const isEqualArr = (a, b) => {
  return arr.every((ele, index) => a[index] === b[index]);
};
console.log(isEqualArr([1, 20, 3], [1, 2, 3]));
