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
