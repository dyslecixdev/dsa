# Searches

## Linear Search

- Searching through every element one at a time in order.
- It has O(N) time complexity.

## Binary Search

- Can only be used if the collection of elements is sorted.

1. Searches for the target by looking at the middle element of the array.
2. Either of the two options below:

- If the target is smaller than middle element, it will repeat the same process on the collection of elements smaller than the middle element.
- If the target is bigger than the middle element, it will repeat the same process on the collection of elements larger than the middle element.

3. Continuously repeat step 2 until the target is the middle element, or the target cannot be found.

- It has O(logN) time complexity.

# Sorts

## Bubble Sort

1. The first for loop goes through N (i.e. array.length) number of times to check if all the elements are sorted.
2. The second for loop goes through N number of times, and swaps the current element and the element to its right if the current element is larger than the element to its right.

- It has O(N^2) time complexity.

# Recursion

- A function continuously executes itself until it hits a base case that breaks the execution.
- If you need to visualize it imagine your function (A) executes then calls itself (B) which also then executes then calls itself (C). Inside C the break case activates, so C returns a value which is the value B returns which is the value A returns. Thus, the order is A -> B -> C -> C resolves -> B resolves -> A resolves.
