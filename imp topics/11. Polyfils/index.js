// * 1. map
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i)) {
        result.push(callback(this[i], i, this));
      }
    }
    return result;
  };
  
  const nums = [1, 2, 3];
  const doubled = nums.myMap((num) => num * 2);
  console.log("Mapped:", doubled); // [2, 4, 6]
  
  // * 2. filter
  Array.prototype.myFilter = function (cb) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i) && cb(this[i], i, this)) {
        res.push(this[i]);
      }
    }
    return res;
  };
  
  const filtered = nums.myFilter((item) => item > 2);
  console.log("Filtered:", filtered); // [3]
  
  // * 3. reduce
  Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator;
    let startIndex = 0;
  
    if (initialValue !== undefined) {
      accumulator = initialValue;
    } else {
      if (this.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = this[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < this.length; i++) {
      if (this.hasOwnProperty(i)) {
        accumulator = cb(accumulator, this[i], i, this);
      }
    }
  
    return accumulator;
  };
  
  const sum = nums.myReduce((acc, curr) => acc + curr, 0);
  console.log("Reduced (sum):", sum); // 6
  
  // * call
  const obj = {
    color: "Black",
    brand: "Bajaj",
  };
  
  function purchaseCar(price, location) {
    console.log(
      `Purchased a ${this.color} ${this.brand} bike for ${price}rs in ${location}`
    );
  }
  
  purchaseCar.call(obj, 200000, "India");
  
  // * myCall
  Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error("Called object is not a function");
    }
  
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
  };
  
  purchaseCar.myCall(obj, 200000, "India");
  
  // * myApply
  Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== "function") {
      throw new Error("Called object is not a function");
    }
  
    if (!Array.isArray(args)) {
      throw new Error("Second argument must be an array");
    }
  
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
  };
  
  purchaseCar.myApply(obj, [200000, "India"]);
  
  // * myBind
  Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error("Called object is not a function");
    }
  
    const fn = this;
    return function (...vals) {
      context.fn = fn;
      const result = context.fn(...args, ...vals);
      delete context.fn;
      return result;
    };
  };
  
  const binded = purchaseCar.myBind(obj, 10000, "Agartala");
  binded(); // Executes with bound context
  