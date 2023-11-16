function quickSort(arr) {
  const resultArr = [...arr];

  if (resultArr.length < 2) {
    return resultArr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < resultArr.length; i++) {
    if (resultArr[i] < pivot) {
      left.push(resultArr[i]);
    } else {
      right.push(resultArr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1])); // [1, 1, 2, 3, 6, 8, 10]
