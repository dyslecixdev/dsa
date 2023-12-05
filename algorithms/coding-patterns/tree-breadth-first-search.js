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

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertRecursive(this.root, newNode);
    }

    console.log(`Inserted ${value} in the BST`);
  }

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

  breadthFirstSearch() {
    const result = [];
    const queue = [];

    // 1.
    if (this.root) {
      queue.push(this.root);
    }

    // 5.
    while (queue.length > 0) {
      // 4.
      const currentNode = queue.shift();
      result.push(currentNode.value);

      // 2.
      if (currentNode.left) {
        // 3.
        queue.push(currentNode.left);
      }

      // 2.
      if (currentNode.right) {
        // 3.
        queue.push(currentNode.right);
      }
    }

    console.log(result);
  }
}

const bst = new BinarySearchTree();
bst.insert(10); // Inserted 10 in the BST
bst.insert(5); // Inserted 5 in the BST
bst.insert(15); // Inserted 15 in the BST
bst.insert(2); // Inserted 2 in the BST
bst.insert(7); // Inserted 7 in the BST
bst.breadthFirstSearch(); // [10, 5, 15, 2, 7]
