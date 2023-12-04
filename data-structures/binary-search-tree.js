class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Inserts a node into the root, or executes the insertRecursive method.
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertRecursive(this.root, newNode);
    }

    console.log(`Inserted ${value} in the BST`);
  }

  // Recursively inserts a node in the BST.
  insertRecursive(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insertRecursive(currentNode.left, newNode);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insertRecursive(currentNode.right, newNode);
      }
    }
  }

  // Executes the searchRecursive method.
  search(value) {
    const returnedValue = this.searchRecursive(this.root, value);

    if (returnedValue !== null) {
      console.log(`Found ${returnedValue.value} in the BST`);
    } else {
      console.log(`Couldn't found ${value} in the BST`);
    }
  }

  // Recursively searches for a node in the BST.
  searchRecursive(currentNode, value) {
    if (!currentNode) {
      return null;
    }

    if (value === currentNode.value) {
      return currentNode;
    } else if (value < currentNode.value) {
      return this.searchRecursive(currentNode.left, value);
    } else {
      return this.searchRecursive(currentNode.right, value);
    }
  }

  // Executes the removeRecursive method.
  remove(value) {
    this.root = this.removeRecursive(this.root, value);
    console.log(`Removed ${value} from the BST`);
  }

  // Recursively remove a node from the BST.
  removeRecursive(currentNode, value) {
    if (!currentNode) {
      return null;
    }

    if (value < currentNode.value) {
      currentNode.left = this.removeRecursive(currentNode.left, value);
    } else if (value > currentNode.value) {
      currentNode.right = this.removeRecursive(currentNode.right, value);
    } else {
      if (!currentNode.left) {
        return currentNode.right;
      } else if (!currentNode.right) {
        return currentNode.left;
      }

      currentNode.value = this.findMinValue(currentNode.right);
      currentNode.right = this.removeRecursive(
        currentNode.right,
        currentNode.value
      );
    }

    return currentNode;
  }

  // Finds the smallest value in the BST.
  findMinValue(node) {
    let minValue = node.value;
    while (node.left) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }
}

const bst = new BinarySearchTree();
bst.insert(10); // Inserted 10 in the BST
bst.insert(5); // Inserted 5 in the BST
bst.insert(15); // Inserted 15 in the BST
bst.insert(2); // Inserted 2 in the BST
bst.insert(7); // Inserted 7 in the BST
bst.search(7); // Found 7 in the BST
bst.remove(7); // Removed 7 from the BST
bst.search(7); // Couldn't found 7 in the BST
