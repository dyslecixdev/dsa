function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === num) {
      return true;
    } else if (arr[middle] < num) {
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
