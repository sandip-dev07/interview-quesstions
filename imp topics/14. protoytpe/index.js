// Object p1 with a method that uses 'this'
const p1 = {
    name: "Sandip",
    age: 25,
    getDetails: function () {
      console.log(`${this.name} and ${this.age}`); // 'this' refers to the calling object
    },
  };
  
  const user = {
    name: "John",
    age: 30,
  };
  
  // Calling getDetails on p1
  p1.getDetails(); // Output: Sandip and 25
  
  // Using call to change 'this' to 'user'
  p1.getDetails.call(user); // Output: John and 30
  
  // Creating a new object p2 with p1 as prototype
  const p2 = Object.create(p1);
  
  console.log(p2); // {} — p2 has no own properties
  console.log(p2.name); // Sandip — inherited from p1 via prototype
  console.log(p2.__proto__); // Logs p1 — the prototype of p2
  
  // Another object to demonstrate __proto__
  const obj = {
    name: "xyz",
    age: 18,
  
    // Note: __proto__ is automatically present, no need to manually add
    // It's added by JavaScript behind the scenes for inheritance
  };
  