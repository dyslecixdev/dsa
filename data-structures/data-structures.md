# Array

- Used to store and manage collections multiple elements.
- Homogeneous: All the elements should be of the same data type.
- Ordered: Elements are stored and can be accessed in sequence.
- Fixed/Static can hold a maximum number of elements, and Dynamic can hold any number of elements (e.g. JavaScript, Python, and C#).

## Array Methods

- push() has O(1).
- pop() has O(1).
- Most of the other methods (e.g. slice(), filter(), and map()) have O(N).

# Linked List

- Used to store and manage collections of dynamic elements.
- Dynamic: Can hold any number of elements.
- Efficient Insertions & Deletions: Can be performed without the element shifting that is needed for arrays.
- Inefficient Random Access: To get to a specific node you need to traverse every node in order, making it harder than accessing any element in an array.
- No Contiguous Memory: Each node is its own block of memory unlike elements in an array where the array is the block of memory.

## Linked List Methods

- length() has O(1).
- prepend has O(1).
- append has O(N).
- insert has O(N).
- delete has O(N).
- get has O(N).

# Doubly Linked List

- Used to store and manage collections of dynamic elements.
- Similar to a linked list except you can through each node starting with the head or the tail, has more efficient random access, but consumes slightly more memory due to the additional reference.

## Doubly Linked List Methods

- length() has ???
- prepend has ???
- append has ???
- insert has ???
- delete has ???
- get has ???

# Array List

- Used to store and manage collections of dynamic elements.
- Dynamic: Can hold any number of elements because the memory allocation of the array can change.
- Ordered: Elements are stored and can be accessed in sequence.
- Efficient Insertions and Deletions: Can insert and delete elements from any position easily.

## Array List Methods

- size() has O(N).
- resize() has O(N).
- push() has O(N).
- pop() has O(N).
- get() has O(1).

# (Array) Buffer

- Low-level data structured used to represent a contiguous region of memory that can store a fixed amount of data, namely binary data.
- Contiguous Memory: The buffer is a block of memory where data is stored in a continuous, linear sequence.
- Fixed Size: The size cannot be changed without creating a new buffer.
  Binary Data: Normally used with integers, floats, bytes, or any other data that can be represented in a binary format.
- No Built-In Methods: No methods for high-level operations like arrays or lists.
- Efficiency: Allows for the direct manipulation of data without the overhead of high-level data structures.

# Queue

- Used to store and manage collections of elements that need to be processed in the order received (static with arrays, or dynamic with linked lists).
- Order Preservation: Preserves the order of the elements since it follows a FIFO principle (i.e. the First element In is also the First element Out).
- Limited Access: You do not have access to any other element in a queue except the first and last ones.

## Queue Methods

- size() has O(1).
- enqueue() has O(1).
- dequeue() has O(N).
- peek() has O(1).
- clear() has O(1).

# Stack

- Used to store and manage collections of elements that require backtracking or undoing operations (static with arrays, or dynamic with linked lists).
- Order Preservation: Preserves the order of the elements since it follows a LIFO principle (i.e. the Last element In is also the First element Out).
- Limited Access: You do not have access to any other element in a stack except the first and last ones.

## Stack Methods

- size() has O(1).
- push() has O(1).
- pop() has O(1).
- peek() has O(1).
- clear() has O(1).

# Binary Search Tree

- Ordered Structure: BSTs maintain an ordered structure where each node has at most two children, and the left subtree of a node contains only nodes with values less than the node's value, while the right subtree contains nodes with values greater than the node's value. This ordering facilitates efficient searching.
- Efficient Insertion, Searching, and Deletion: Due to the ordered structure, these methods in a BST has an average time complexity of O(log n), where n is the number of nodes in a balanced tree.
- In-Order Traversal: BSTs can be easily traversed in sorted order using in-order traversal. This property is useful in scenarios where data needs to be processed or displayed in a sorted order.
- Space Efficiency: BSTs have relatively low space overhead. Each node only requires storage for the value and references to its left and right children.
- Dynamic Operations: BSTs are dynamic data structures that support efficient insertion and deletion of elements. This makes them suitable for scenarios where the data set is dynamic and frequently updated.

## Binary Search Tree Methods

- insert() has O(N).
- search() has O(N).
- remove() has O(N).
