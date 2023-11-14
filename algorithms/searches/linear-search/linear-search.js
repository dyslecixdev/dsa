function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }

  return false;
}

console.log(linearSearch([1, 2, 3], 3)); // true
console.log(linearSearch([1, 2, 3], 4)); // false
