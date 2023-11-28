function slidingWindow(arr, windowSize) {
  // 1.
  for (let i = 0; i <= arr.length - windowSize; i++) {
    // 2.
    const window = arr.slice(i, i + windowSize);
    console.log(window);
  }
}

slidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [ 1, 2, 3 ] > [ 2, 3, 4 ] > [ 3, 4, 5 ] > [ 4, 5, 6 ] > [ 5, 6, 7 ] > [ 6, 7, 8 ] > [ 7, 8, 9 ]
