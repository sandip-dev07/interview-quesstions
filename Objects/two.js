// * 14. What is shallow copy and deep copy?
// A shallow copy creates a new object that shares references to the original object's nested elements, so changes to those elements affect both objects. A deep copy creates a completely independent copy, duplicating all nested objects to avoid shared references.

// * 15. What are WeakMap and WeakSet, and how are they different from Map and Set?

// * 16. What is the role of the setImmediate function in Node.js, and how is it different from setTimeout?

// * 17. What is an event bubbling in JavaScript?

// * 18. Explain the concept of promises and how they work.

// * 19.  What are Web Workers, and how do you use them to run scripts in the background?
// Web Workers are JavaScript threads that run in the background, separate from the main thread, allowing long-running scripts to be executed without blocking the user interface. You can create a Web Worker using the Worker constructor, passing a JavaScript file as an argument. Once created, the worker can perform tasks asynchronously, and you can communicate with it via postMessage and onmessage events, ensuring the main thread remains responsive.

// * 20.Explain the concept of “debouncing” and “throttling” in JavaScript. How can these techniques optimize performance?
// Debouncing and throttling are techniques used to optimize performance by limiting the frequency of function executions in response to events like scrolling or resizing.

// Debouncing ensures that a function is only executed after a certain amount of idle time, i.e., it delays the execution until the event stops triggering for a specified time (e.g., for search input).
// Throttling limits the number of times a function can be executed in a given period, ensuring it runs at regular intervals (e.g., during scroll or window resizing).