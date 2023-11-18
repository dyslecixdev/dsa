function merge(left, right) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

function mergeSort(arr) {
  const resultArr = [...arr];

  if (resultArr.length < 2) {
    return resultArr;
  }

  const middle = Math.floor(resultArr.length / 2);
  const left = resultArr.slice(0, middle);
  const right = resultArr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([5, 4, 3, 1, 2]));
