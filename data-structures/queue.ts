class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Gets the length of the queue.
  size(): void {
    console.log(this.items.length);
  }

  // Adds an element to the end of the queue.
  enqueue(element: T): void {
    this.items.push(element);

    console.log(`Added ${element} to the end of the queue`);
  }

  // Removes the front element from the queue.
  dequeue(): void {
    if (this.items.length < 1) {
      console.log("There is nothing to dequeue because the queue is empty");
      return;
    }

    const element = this.items.shift();

    console.log(`Removed ${element} from the front of the queue`);
  }

  // Gets the front element from the queue.
  peek(): void {
    if (this.items.length < 1) {
      console.log("There is nothing to peek at because the queue is empty");
      return;
    }

    const element = this.items[0];

    console.log(element);
  }

  // Removes all the elements from the queue.
  clear(): void {
    this.items = [];

    console.log("All elements have been removed from the queue");
  }
}

const queue = new Queue<string>();
queue.enqueue("A"); // Added A to the end of the queue
queue.enqueue("B"); // Added B to the end of the queue
queue.enqueue("C"); // Added C to the end of the queue
queue.size(); // 3
queue.dequeue(); // Removed A from the front of the queue
queue.peek(); // B
queue.clear(); // All elements have been removed from the queue
