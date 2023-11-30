function cyclicSort(arr) {
  const result = [...arr];
  // 1.
  let i = 0;

  // 2.
  while (i < result.length) {
    const j = result[i] - 1;

    // 3.
    if (result[i] !== result[j]) {
      const temp = result[i];
      result[i] = result[temp - 1];
      result[temp - 1] = temp;
    }
    // 4.
    else {
      i++;
    }
  }

  return result;
}

console.log(cyclicSort([3, 5, 2, 1, 4])); // [1, 2,  3,  4, 5]
