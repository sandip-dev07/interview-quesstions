// * Debounce & throttling:
// It limits the execution of a function to call and waits for a certain amount of time before f=running it again
const myDebouce = function (cb, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
