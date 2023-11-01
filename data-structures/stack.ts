class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Gets the length of the stack.
  size(): void {
    console.log(this.items.length);
  }

  // Adds an element to the end of the stack.
  push(element: T): void {
    this.items.push(element);

    console.log(`Added ${element} to the end of the stack`);
  }

  // Removes the last element from the stack.
  pop(): void {
    if (this.items.length < 1) {
      console.log("There is nothing to pop because the stack is empty");
      return;
    }

    const element = this.items.pop();

    console.log(`Removed ${element} from the end of the stack`);
  }

  // Gets the last element from the stack.
  peek(): void {
    if (this.items.length < 1) {
      console.log("There is nothing to peek at because the stack is empty");
      return;
    }

    const element = this.items[this.items.length - 1];

    console.log(element);
  }

  // Removes all the elements from the stack.
  clear(): void {
    this.items = [];

    console.log("All elements have been removed from the stack");
  }
}

const stack = new Stack<string>();
stack.push("A"); // Added A to the end of the stack
stack.push("B"); // Added B to the end of the stack
stack.push("C"); // Added C to the end of the stack
stack.size(); // 3
stack.pop(); // Removed C from the end of the stack
stack.peek(); // B
stack.clear(); // All elements have been removed from the stack
