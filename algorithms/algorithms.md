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

3. Continuously repeat step 2 until the target is the middle element(s), or the target cannot be found.

- It has O(logN) time complexity.
