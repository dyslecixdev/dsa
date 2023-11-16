function bubbleSort(arr) {
  const resultArr = [...arr];

  for (let i = 0; i < resultArr.length - 1; i++) {
    for (let j = 0; j < resultArr.length - i - 1; j++) {
      if (resultArr[j] > resultArr[j + 1]) {
        const temp = resultArr[j];
        resultArr[j] = resultArr[j + 1];
        resultArr[j + 1] = temp;
      }
    }
  }

  return resultArr;
}

console.log(bubbleSort([4, 2, 5, 3, 1])); // [1, 2, 3, 4, 5]
