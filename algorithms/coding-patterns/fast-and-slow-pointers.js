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

  findMiddle() {
    if (!this.head) {
      console.log("There is no middle node because the linked list is empty");
    }

    // 1.
    let slowPointer = this.head;
    let fastPointer = this.head;

    // 2.
    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    console.log(slowPointer.data);
  }
}

const linkedList = new LinkedList();
linkedList.append("A"); // Appended A to the linked list
linkedList.append("B"); // Appended B to the linked list
linkedList.append("C"); // Appended C to the linked list
linkedList.findMiddle(); // B
