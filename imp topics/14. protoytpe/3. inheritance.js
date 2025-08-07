const p1 = {
  xp1: "Inside p1",
};

const p2 = {
  xp2: "Inside p2",
  __proto__: p1, // p2 inherits from p1
};
console.log(p2);
// { xp2: 'Inside p2', __proto__: { xp1: 'Inside p1' } }

const p3 = {
  xp3: "Inside p3",
  __proto__: p2, // p3 inherits from p2
};
console.log(p3);
// { xp3: 'Inside p3', __proto__: { xp2: 'Inside p2', __proto__: { xp1: 'Inside p1' } } }

console.log(p3.xp1); // Inside p1

// * Any class or anything in js __proto__ is an object

let s = "Sandip";
console.log(s.__proto__); 
// String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …, __proto__: Object}
//s.__proto__ -> String.__proto__ -> Object.__proto__ = null

// until __proto__ is null it will keep going upwards in the prototype chain

// that means everything in js originates, inherits from Object

class Student {
    constructor() {
        this.name = "Sandip";
    }

    getName() {
        console.log(this.name);
    }
}

const s1 = new Student();
console.log(s1);
console.log(s1.__proto__);
//chain: s1.__proto__ -> Student.prototype -> Object.prototype -> null


const s2 = {__proto__: Student.prototype};
console.log(s2);
console.log(s2.__proto__);
//chain: s2.__proto__ -> Student.prototype -> Object.prototype -> null

// __proto vs prototype : __proto__ is a property of an object, prototype is a property of a class