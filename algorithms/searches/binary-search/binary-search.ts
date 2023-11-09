function binarySearch(haystack: number[], needle: number): boolean {
  let left = 0;
  let right = haystack.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (haystack[middle] === needle) {
      return true;
    } else if (haystack[middle] < needle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return false;
}

console.log(binarySearch([1, 2, 3], 3)); // true
console.log(binarySearch([1, 2], 2)); // true
console.log(binarySearch([1, 2, 3], 4)); // false
