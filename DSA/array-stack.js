// stack: push, pop, top:

class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(50);
stack.push(100);
stack.push(200);
stack.push(800);
stack.push(600);

stack.pop()

console.log(stack.top());
console.log(stack);
