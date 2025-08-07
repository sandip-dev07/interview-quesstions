// * THIS keyword:
// In english lang we pronounce this to ref something e,g. fruuits are kept in this bucket similaryly in js this keyword used to ref something like an object.(this always ref to parent object)
// this changes in diff context :
// in browser refs to Window Object,

this.a = "Sandip";
// console.log(this);

let user = {
  name: "John",
  age: 25,
  childObj: {
    new_name: "Doe",
    getDetails() {
      console.log(`${this.new_name} and ${this.name}`); // here this refs to childObj not user
    },
    getDetailsArrow: () => {
      console.log(`${this.new_name} and ${this.name}`); // here this keyword value in arrow function comes from its parents function (which is normal function)
    },
    getDetailsNested() {
      const nestedArrow = () => console.log(this.new_name);
      nestedArrow();
    },
  },
};

// user.childObj.getDetails();
// user.childObj.getDetailsArrow();
user.childObj.getDetailsNested();

// * o/p based ques:
const user2 = {
  name: "Sandip",
  getName() {
    // normal func awlays refs to its parents object.
    const name = "John";
    console.log(this.name);
  },
};
// console.log(user2.getName());

// * what is the result of accessing its ref and why?
function createUser() {
  return {
    name: "Sandip",
    age: 25,
    ref: this, // window object
  };
}

let user3 = createUser();
console.log(user3.ref);

// to fix above we can user normal function:
function createUser() {
  return {
    name: "Sandip",
    age: 25,
    ref() {
      return this;
    },
  };
}
let user4 = createUser();
// console.log(user4.ref().name);

// * what will be the output?
const user5 = {
  name: "Sandip",
  getDetails() {
    // console.log(this.name); // window object
  },
};

setTimeout(user5.getDetails, 1000); // here user5.getDetails will be treated as callback rather than a method, that callback  doent have access to user5 obj

// to fix above code:
setTimeout(function () {
  user5.getDetails(); // this will invoked as method
}, 1000);

// * create an object calculator:
let calculator = {
  _res: 0,

  read() {
    this.a = +prompt("a :", 0);
    this.b = +prompt("b", 0);
  },
  sum() {
    this._res = this.a + this.b;
    return this._res;
  },
  multiply() {
    this._res = this.a * this.b;
    return this._res;
  },
};

// console.log(calculator.read());
// console.log(calculator.sum());

// * what will be o/p?
// let length = 10;
function callback() {
  console.log(this.length);
}
const object = {
  length: 25,
  method(fn) {
    fn(); // will target global object
  },
};

object.method(callback);

// * what will be o/p?
var length = 10;
function callback2() {
  //   console.log(this.length);
}
const object2 = {
  length: 25,
  method() {
    // arguments = [callback2, 1, 2, 3]
    arguments[0](); // array is the parent object here and in prototype length property is present so it will print array length
  },
};

object2.method(callback2, 1, 2, 3);

// * implement calc:
const calc = {
  _total: 0,

  add(val) {
    this._total += val;
    return this;
  },
  multiply(val) {
    this._total *= val;
    return this;
  },
  subtract(val) {
    this._total -= val;
    return this;
  },
};
const res = calc.add(10).multiply(5).subtract(30).add(20);
console.log(res._total);

// * this contexts:
// Demonstrating `this` in various contexts:

// 1. Global Context
console.log(this); // Window (in browser), undefined (in strict mode)

// 2. Regular Function
function regularFunc() {
  console.log(this); // Global object or undefined (in strict mode)
}
regularFunc();

// 3. Arrow Function
const arrowFunc = () => {
  console.log(this); // Lexical `this` from outer scope
};
arrowFunc();

// 4. Object Method
const obj = {
  name: "Object",
  method() {
    console.log(this.name); // "Object"
  },
};
obj.method();

// 5. Arrow Function in Object
const objWithArrow = {
  name: "Object",
  method: () => {
    console.log(this.name); // Undefined (global scope in browser)
  },
};
objWithArrow.method();

// 6. Class
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name); // Instance property
  }
}
const john = new Person("John");
john.getName();

// 7. Event Listener
document.body.addEventListener("click", function () {
  console.log(this); // Element that triggered the event
});
document.body.addEventListener("click", () => {
  console.log(this); // Lexical scope (likely Window)
});

// 8. setTimeout
setTimeout(function () {
  console.log(this); // Global object
}, 1000);
setTimeout(() => {
  console.log(this); // Lexical `this`
}, 1000);

// 9. Constructor Function
function ConstructorExample() {
  this.value = "Constructor";
}
const example = new ConstructorExample();
console.log(example.value); // "Constructor"

// 10. `bind`, `call`, `apply`
const boundFunc = regularFunc.bind(obj);
boundFunc(); // Bound to `obj`

regularFunc.call(obj); // Calls with `this` as `obj`
regularFunc.apply(obj); // Same as `call`

// 12. Fixing `this` in Callbacks
const users = {
  name: "Sandip",
  getName() {
    console.log(this.name);
  },
};
setTimeout(users.getName.bind(users), 1000); // "Sandip"
