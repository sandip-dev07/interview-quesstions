class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtIndex(index, data) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.insertAtHead(data);
      return;
    }

    const newNode = new Node(data);
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
  }

  deleteFromIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }

    temp.next = temp.next.next;
    this.size--;
  }

  print() {
    let current = this.head;
    let res = "";
    while (current) {
      res += current.data + "->";
      current = current.next;
    }
    console.log(res);
  }
}

let list = new LinkedList();
list.insertAtHead(40);
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtHead(60);
list.insertAtHead(80);
list.insertAtIndex(2, 500);
list.deleteFromIndex(2)
list.print();

console.log(list);
