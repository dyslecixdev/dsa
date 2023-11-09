// TODO: Fix this

class Node<T> {
  data: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Gets the length of the linked list.
  length(): number {
    return this.size;
  }

  // Adds a node to the front of the linked list.
  prepend(data: T): void {
    const newNode = new Node(data);

    if (this.length() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;

    console.log(`Prepended ${data} to the linked list`);
  }

  // Adds a node to the end of the linked list.
  append(data: T): void {
    const newNode = new Node(data);

    if (this.length() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
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
      newNode.prev = null;
      this.head = newNode;

      if (this.head.next) {
        this.head.next.prev = newNode;
      }

      if (this.size === 0) {
        this.tail = newNode;
      }
    } else if (position === this.size) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let index = 0;

      while (index < position - 1) {
        current = current.next;
        index++;
      }

      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
    }

    this.size++;

    console.log(`Inserted ${data} at position ${position}`);
  }

  // Deletes a node at a specific position in the linked list.
  delete(position: number): void {
    if (position < 0 || position >= this.size) {
      console.log(
        `There is nothing to delete because the linked list is empty, or the position chosen is greater than ${this.size}`
      );
      return;
    }

    if (position === 0) {
      if (this.head) {
        this.head = this.head.next;

        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
      } else {
        console.log(
          "There is nothing to delete because the linked list is empty"
        );
      }
    } else if (position === this.size) {
      if (this.tail) {
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          // If the list becomes empty
          this.head = null;
        }
      } else {
        console.log(
          "There is nothing to delete because the linked list is empty"
        );
      }
    } else {
      // Delete a node at a specific position
      let current = this.head;
      let index = 0;

      while (current && index < position) {
        current = current.next;
        index++;
      }

      if (current) {
        current.prev!.next = current.next;
        current.next!.prev = current.prev;
      }
    }

    this.size--;

    console.log(`Deleted node at position ${position}`);
  }
}
