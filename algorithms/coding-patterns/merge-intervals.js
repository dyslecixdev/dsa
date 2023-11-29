function mergeIntervals(intervals) {
  const intervalsCopy = [...intervals];

  if (intervalsCopy.length <= 1) {
    return intervalsCopy;
  }

  // 1.
  intervalsCopy.sort((a, b) => a[0] - b[0]);

  // 2.
  let result = [intervalsCopy[0]];

  // 3.
  for (let i = 1; i < intervalsCopy.length; i++) {
    let currentInterval = intervalsCopy[i];
    let lastMergedInterval = result[result.length - 1];

    // 4.
    console.log(currentInterval[0], lastMergedInterval[1]);
    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    }
    // 5.
    else {
      result.push(currentInterval);
    }
  }

  return result;
}

console.log(
  mergeIntervals([
    [15, 18],
    [1, 3],
    [8, 10],
    [2, 6],
  ])
); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
