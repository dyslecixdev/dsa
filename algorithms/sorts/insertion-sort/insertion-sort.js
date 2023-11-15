function insertionSort(arr) {
  const resultArr = [...arr];

  for (let i = 1; i < resultArr.length; i++) {
    let currentElement = resultArr[i];
    let j = i - 1;

    while (j >= 0 && resultArr[j] > currentElement) {
      resultArr[j + 1] = resultArr[j];
      j--;
    }

    resultArr[j + 1] = currentElement;
  }

  return resultArr;
}

console.log(insertionSort([5, 2, 3, 4, 1])); // [1, 2, 3, 4, 5]
