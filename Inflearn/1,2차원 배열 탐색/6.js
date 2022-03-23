function solution(arr) {
  let answer;
  let length = arr.length;
  let row = 0;
  let col = 0;
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < length; i++) {
    row = col = 0;
    for (let j = 0; j < length; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }
    answer = Math.max(row, col);
  }
  
  for (let i = 0; i < length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][length - i - 1];
  }

  answer = Math.max(answer, leftDiagonal, rightDiagonal);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
