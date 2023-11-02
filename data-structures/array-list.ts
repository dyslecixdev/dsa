class ArrayList<T> {
  private array: (T | undefined)[];
  private capacity: number;

  constructor(capacity: number = 10) {
    this.capacity = capacity;
    this.array = new Array<T>(capacity);
  }

  // Get the length of the array list.
  size(): number {
    let count = 0;

    for (let i = 0; i < this.capacity; i++) {
      if (this.array[i] !== undefined) {
        count++;
      }
    }

    return count;
  }

  // Doubles the capacity of the array list when it reaches capacity.
  private resize(): void {
    this.capacity *= 2;

    const newArray = new Array<T>(this.capacity);

    for (let i = 0; i < this.size(); i++) {
      newArray[i] = this.array[i];
    }

    this.array = newArray;
  }

  // Adds an element to the array list.
  push(element: T): string {
    if (this.size() === this.capacity) {
      this.resize();
    }

    for (let i = 0; i < this.capacity; i++) {
      if (this.array[i] === undefined) {
        this.array[i] = element;
        return `Added ${element} to the array list`;
      }
    }
  }

  // Removes an element at a specific location in the array list.
  pop(index: number): string {
    if (index < 0 || index >= this.size()) {
      return `There is nothing to pop because the array list is empty, or the position chosen is greater than ${this.size}`;
    }

    let element = this.array[index];

    this.array[index] = undefined;

    return `Removed ${element} from position ${index}`;
  }

  // Gets an element at a specific index in the array list.
  get(index: number): string | T {
    if (index < 0 || index >= this.size()) {
      return `Choose a position within 0 and ${this.size()}`;
    }

    if (this.array[index] === undefined) {
      return `There is no element at position ${index}`;
    } else {
      return this.array[index];
    }
  }
}

const arrayList = new ArrayList<string>();

console.log(arrayList.size()); // 10
console.log(arrayList.push("A")); // Added A to the array list
console.log(arrayList.push("B")); // Added B to the array list
console.log(arrayList.push("C")); // Added C to the array list
console.log(arrayList.get(1)); // B
console.log(arrayList.pop(1)); // Removed B from position 1

console.log(arrayList.push("D")); // Added D to the array list
console.log(arrayList.push("E")); // Added E to the array list
console.log(arrayList.push("F")); // Added F to the array list
console.log(arrayList.push("G")); // Added G to the array list
console.log(arrayList.push("H")); // Added H to the array list
console.log(arrayList.push("I")); // Added I to the array list
console.log(arrayList.push("J")); // Added J to the array list
console.log(arrayList.push("K")); // Added K to the array list
console.log(arrayList.push("L")); // Added L to the array list
console.log(arrayList.size()); // 11
