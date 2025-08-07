// Queuw: Enqueue and Dequeuw

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    this.queue.shift();
  }

  top() {
    return this.queue[0];
  }
  back() {
    return this.queue.at(-1);
  }
}

const queue1 = new Queue();
queue1.enqueue(10);
queue1.enqueue(30);
queue1.enqueue(50);
queue1.enqueue(80);
queue1.dequeue();
console.log(queue1.top());
console.log(queue1.back());
console.log(queue1);
