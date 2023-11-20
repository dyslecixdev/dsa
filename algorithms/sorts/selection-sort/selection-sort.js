function swap(arr, firstVal, secondVal) {
  var temp = arr[firstVal];
  arr[firstVal] = arr[secondVal];
  arr[secondVal] = temp;
}

function selectionSort(arr) {
  const resultArr = [...arr];

  for (let i = 0; i < resultArr.length - 1; i++) {
    let min_idx = i;

    for (let j = i + 1; j < resultArr.length; j++) {
      if (resultArr[j] < resultArr[min_idx]) {
        min_idx = j;
      }
    }

    swap(resultArr, min_idx, i);
  }

  return resultArr;
}

const arr = [5, 4, 2, 3, 1];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5]
