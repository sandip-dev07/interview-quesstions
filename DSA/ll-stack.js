class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    this.head = newNode;
    newNode.next = this.top;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.head.data;
    this.head = this.head.next;
    this.size--;
    return item;
  }

  top() {
    return this.head.data;
  }

  isEmpty() {
    this.size === 0;
  }
}

const stack = new StackLL();
stack.push(10);
stack.push(20);
console.log(stack.top());
console.log(stack);


// practices:
function isValidParams(item) {
  const stack = [];

  const obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const x of item) {
    if (x === "(" || x === "{" || x === "[") {
      stack.push(x);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === obj[x]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValidParams("()"));
