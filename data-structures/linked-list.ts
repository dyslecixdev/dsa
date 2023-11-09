class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Gets the length of the linked list.
  length(): number {
    return this.size;
  }

  // Adds a node to the front of the linked list.
  prepend(data: T): void {
    const newNode = new Node(data);

    if (this.length() !== 0) {
      newNode.next = this.head;
    }

    this.head = newNode;

    this.size++;

    console.log(`Prepended ${data} to the linked list`);
  }

  // Adds a node to the end of the linked list.
  append(data: T): void {
    const newNode = new Node(data);

    if (this.length() !== 0) {
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

  // Adds a node to a specific position in the linked list.
  insert(data: T, position: number): void {
    if (position < 0 || position > this.size) {
      console.log(`Choose a position within 0 and ${this.size}`);
      return;
    }

    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let index = 0;

      while (index < position - 1) {
        current = current.next;
        index++;
      }

      newNode.next = current.next;
      current.next = newNode;
    }

    this.size++;

    console.log(`Inserted ${data} at position ${position}`);
  }

  // Deletes a node at a specific position in the linked list.
  delete(position: number): void {
    if (position < 0 || position > this.size) {
      console.log(
        `There is nothing to delete because the linked list is empty, or the position chosen is greater than ${this.size}`
      );
      return;
    }

    if (position === 0) {
      if (this.head) {
        this.head = this.head.next;
        this.size--;

        console.log(`Deleted node at position ${position}`);
      } else {
        console.log(
          "There is nothing to delete because the linked list is empty"
        );
      }
      return;
    }

    let current = this.head;
    let previous: Node<T> | null = null;
    let index = 0;

    while (current && index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    if (current) {
      if (previous) {
        previous.next = current.next;
      }
    }

    this.size--;

    console.log(`Deleted node at position ${position}`);
  }

  // Gets a node at a specific position in the linked list.
  get(position: number): void {
    if (position < 0 || position > this.size) {
      console.log(`Choose a position within 0 and ${this.size}`);
      return;
    }

    let current = this.head;
    let index = 0;

    while (current && index < position) {
      current = current.next;
      index++;
    }

    console.log(current.data);
  }
}

const linkedList = new LinkedList<string>();

linkedList.prepend("A"); // Prepended A to the linked list
linkedList.append("C"); // Appended C to the linked list
linkedList.insert("B", 1); // Inserted B at position 1
linkedList.length(); // 3
linkedList.delete(0); // Deleted node at position 0
linkedList.get(0); // B
