function isPairSum(arr, value) {
  const copyArr = [...arr];

  // 1.
  let left = 0;
  let right = copyArr.length - 1;

  // 2.
  while (left < right) {
    if (copyArr[left] + copyArr[right] === value) return true;
    else if (copyArr[left] + copyArr[right] < value) left++;
    else right--;
  }

  return false;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function call
console.log(isPairSum(arr, 17));
