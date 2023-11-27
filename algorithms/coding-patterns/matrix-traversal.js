function traverseMatrix(matrix) {
  // 1.
  const rows = matrix.length;
  const cols = matrix[0].length;

  // 2.
  for (let i = 0; i < rows; i++) {
    // 3.
    for (let j = 0; j < cols; j++) {
      console.log(matrix[i][j]);
    }
  }
}

traverseMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // 1 > 2 > 3 > 4 > 5 > 6 > 7 > 8 > 9
