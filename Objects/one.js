// * Q1. How do you add dynamic key values in an object?
let dynamicKey = "age";
let dynamicValue = 18;

let user = {};

user[dynamicKey] = dynamicValue;

let arr = ["Sam", "Alex", "Bob"];

for (let i = 0; i < arr.length; i++) {
  user[i] = arr[i];
}
// console.log(user);

// * Q2. What will be the output?
const obj = {
  a: 1,
  b: 2,
  a: 3,
};
// console.log(obj);

// * Q3. Create a function multiplyByTwo(obj) that multiply all the numeric values of nums by 2
function multiplyByTwo(nums) {
  for (key in nums) {
    const checkIsNumeric = isNaN(nums[key]);
    if (!checkIsNumeric) {
      nums[key] = 2 * nums[key];
    }
  }
  return nums;
}
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

const multiplyByTwoFc = multiplyByTwo(nums);
// console.log(multiplyByTwoFc);

// * Q4. What will be the output?
const obj1 = {};
const obj2 = { key: "b" };
const obj3 = { key: "c" };
obj1[obj2] = 123;
obj1[obj3] = 234;
// console.log(obj1[obj2]);
//Explanation: In this code, when you use objects 'obj2' and 'obj3' as keys in the object 'obj1', JavaScript automatically converts these objects into strings using the 'toString()' method. Since both 'obj2' and 'obj3' are objects, their default string representation is '"[object Object]"'. This means both 'obj1[obj2] = 123' and 'obj1[obj3] = 234' actually assign values to the same key: '"[object Object]"'. As a result, the second assignment ('obj1[obj3] = 234') overwrites the first one. Therefore, when you log 'obj1[obj2]', it will return '234', because both 'obj2' and 'obj3' resolve to the same key '"[object Object]"'. The final object 'obj1' will look like '{ "[object Object]": 234 }'.

// * Q5. What will be the output?
// console.log([..."GFG"]);
// Explanation: The expression [....."GFG"] uses the **spread syntax** (...), which unpacks elements from an iterable (in this case, a string) into individual items. Since strings are iterable in JavaScript, the spread syntax spreads the string "GFG" into its individual characters: 'G', 'F', and 'G'. These characters are then placed into a new array, resulting in ['G', 'F', 'G'].

// * Q6. What will be the output?
const obj4 = { name: "GFG", age: 14 };
const obj5 = { alpha: "rule", ...obj4 };
// console.log(obj5);

// * Q7. What will be the output?
const obj6 = {
  name: "GFG",
  level: 4,
  company: true,
};
const res = JSON.stringify(obj6, ["name", "level"]);
// console.log(res);
//Explanation: In this code, the JSON.stringify() method is used to convert the obj object into a JSON string. The second argument passed to JSON.stringify() is an array of keys (["name", "level"]), which acts as a replacer. This means only the properties specified in the array will be included in the resulting JSON string.

// * Q8. What will be the output?
const operation = {
  value: 20,
  multi() {
    return this.value * 10;
  },
  divide: () => this.value / 10,
};

// console.log(operation.multi());
// console.log(operation.divide());

// * Q9. What will be the output?
function Items(list, list2, ...param) {
  return [list, list2, ...param];
}
const itemsData = Items(["a", "b"], "c", "d");
// console.log(itemsData);

// * 10. What will be the output?
let obj7 = { name: "GFG" };
let obj8 = obj7; // Both obj1 and obj2 are pointing to the same object
// let obj8 = {...obj7}; // copy so will not point to same object
obj8.name = "GeeksForGeeks";
// console.log(obj7.name);
// console.log(obj8.name);

// * 11. What will be the output?
// console.log({ name: "GFG" } == { name: "GFG" });
// console.log({ name: "GFG" } === { name: "GFG" });
//Explanation: Both '==' and '===' operators compare objects by reference, not by their content.

// * 12. What will be the output?
let obj9 = { name: "GFG" };
let obj10 = [obj9]; // reference types
obj9 = null;

// console.log(obj10);
//Explanation: After obj1 is set to null, obj2 still retains the reference to the object, so obj2 will output the array containing the object { name: "GFG" }. The change to obj1 does not affect the obj2 array because arrays and objects in JavaScript are reference types, and obj2 is still holding the reference to the original object.

// * 13. What will be the output?
let obj11 = { num: 2 };
const fun = (x = { ...obj11 }) => {
  // console.log(x);
  // console.log((x.num /= 2));
};

fun();
fun();
fun(obj11);
fun(obj11);
//Explanation: The first two calls to fun() create a new object each time (because of the spread operator), and x.num is divided by 2, logging 1 both times. The last two calls pass the original obj as the argument. Since objects are passed by reference, obj is modified directly, first to { num: 1 } and then to { num: 0.5 }. Thus, 1 and 0.5 are logged accordingly.

// * 14. What will be the output?
(function () {
  var a = (b = 5);
})();
// console.log(typeof a);
// console.log(typeof b);
//Explanation: Inside the IIFE, b = 5 is treated as a global variable (since no var, let, or const keyword is used).
// However, a is declared with var and is local to the function, so it is undefined outside.
