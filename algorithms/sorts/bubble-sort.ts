function bubbleSort(arr: number[]): number[] {
  const resultArr = [...arr];

  for (let i = 0; i < resultArr.length - 1; i++) {
    for (let j = 0; j < resultArr.length - 1 - i; j++) {
      if (resultArr[j] > resultArr[j + 1]) {
        const temp = resultArr[j];
        resultArr[j] = resultArr[j + 1];
        resultArr[j + 1] = temp;
      }
    }
  }

  return resultArr;
}

console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([4, 2, 5, 3, 1]));
