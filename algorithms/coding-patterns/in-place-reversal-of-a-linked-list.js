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

  print() {
    const nodes = [];
    let current = this.head;

    for (let i = 0; i < this.size; i++) {
      nodes.push(current.data);
      current = current.next;
    }

    console.log(nodes.join(" > "));
  }

  append(data) {
    const newNode = new Node(data);

    if (this.size === 0) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;

    console.log(`Appended ${data} to the linked list`);
  }

  reverse() {
    // 1.
    let next = null;
    let current = this.head;
    let prev = null;

    // 2.
    while (current !== null) {
      // 3.
      next = current.next;

      // 4.
      current.next = prev;

      // 5.
      prev = current;

      // 6.
      current = next;
    }

    // 7.
    this.head = prev;

    this.print();
  }
}

const linkedList = new LinkedList();
linkedList.append("A"); // Appended A to the linked list
linkedList.append("B"); // Appended B to the linked list
linkedList.append("C"); // Appended C to the linked list
linkedList.append("D"); // Appended C to the linked list
linkedList.reverse(); // D > C > B > A
