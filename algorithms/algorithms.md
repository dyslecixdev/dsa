# [Coding Patterns](https://www.linkedin.com/feed/update/urn:li:activity:7130183190857613312/)

## Two Pointers

1. Create two pointers: the left pointer starts at the 0 index and the right pointer starts at the array's last index.
2. Use a while loop that ensures the left pointer is always to the left of the right pointer.

## Matrix Traversal

1. Create the rows, which is the number of sub-arrays, and cols, which is the maximum number of elements in the sub-arrays.
2. Create a for loop that traverses through each row.
3. Create a for loop that traverses through each column.

## Fast & Slow Pointers

1. Create two pointers: the slow and fast pointer start at the 0 index.
2. Use a while loop that moves the slow pointer one index at a time and the fast pointer two indices at a time, and ensures that the fast pointer is pointing at a value.

## Sliding Window

1. Use a for loop that goes through an array.
2. Show the consecutive elements in the array as a "window" of the whole array.

## Merge Intervals

1. Sorts the sub-arrays by the first element from lowest to highest number.
2. Initialize result which is an array with the first sub-array as an element.
3. For loop over the sorted sub-arrays.
4. If the first element of the current sub-array is less than the second element of the previous sub-array, replace the second element of the previous sub-array with the larger second element between the current and previous sub-arrays.
5. Otherwise, add the current sub-array to the result.

## Cyclic Sort

1. Initialize i which starts at 0.
2. Use a while loop that ensures i is less than the array's length.
3. If the number at i's index is not equal to the index it should be at (e.g. if result[i] is 3, then it should be at the 2nd index), switch it and the number at temp - 1's index.
4. Otherwise increment i.

## In-place Reversal of a Linked List

1. Initialize current to the linked list's head, and prev and next to null.
2. Use a while loop to go over every node in the linked list.
3. Save the reference to the next node in next pointer.
4. Reverse the direction of the current node's pointer.
5. Move the prev pointer to the current node.
6. Move the current pointer to the next node.
7. After the while loop breaks, move the head to the prev node.

## Tree Breadth First Search

## Tree Depth First Search

## Two Heaps

## Subsets

## Modified Binary Search

## Bitwise XOR

## Top 'K' Elements

## K-way Merge

## Topological Sort

## Trie

## Backtracking

## Monotonic Stack

## 0/1 Knapsack (Dynamic Programming)

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

## Quick Sort

1. Chooses an arbitrary element to pivot around, and creates two empty arrays. left will hold all the elements less than the pivot, and right will hold all the elements equal to or greater than the pivot.
2. For loop to put all the elements except the pivot in either the left or right array.
3. Continuously repeat steps 1 and 2 recursively on the left and right arrays until every pivot is sorted in order.

- It has O(N \* logN) time complexity.

## Insertion Sort

1. The for loop goes through N (i.e. array.length) number of times to check if all the elements are sorted.
2. The while loop checks if the element its at is greater than the current element, and will continue to shift down until that's no longer the case.
3. Place the current element at the position the while loop stopped at.

- It has O(N^2) time complexity.

## Merge Sort

## Selection Sort

1. The first for loop goes through N (i.e. array.length) number of times to check if all the elements are sorted.
2. The second for loop goes through N number of times, and swaps the current element and the element to its right if the current element is smaller than the element to its right.

- It has O(N^2) time complexity.

## Bucket Sort

## Shell Sort

## Radix Sort

## Comb Sort

## Tim Sort

# Recursion

- A function continuously executes itself until it hits a base case that breaks the execution.
- If you need to visualize it imagine your function (A) executes then calls itself (B) which also then executes then calls itself (C). Inside C the break case activates, so C returns a value which is the value B returns which is the value A returns. Thus, the order is A -> B -> C -> C resolves -> B resolves -> A resolves.
- The Big O Notation time complexity varies.

# Dynamic Programming

- TODO: Best time to invest in stock
