// * what will be the output?
console.log("Start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});
promise1.then((res) => {
  console.log(res);
});
console.log("End");

// * what will be the output?
console.log("Start");
const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  console.log(3);
});
promise2.then((res) => {
  console.log(res);
}); // as no resolve, reject so will not print anything
console.log("End");
