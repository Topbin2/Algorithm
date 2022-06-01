function solution(board, moves) {
  const stack = [];

  let answer = 0;

  moves.forEach(idx => {
    for(let i = 0; i < board.length; i++) {
      if(board[i][idx - 1] !== 0) {
        const temp = board[i][idx - 1];
        board[i][idx - 1] = 0;
        if(stack[stack.length - 1] === temp) {
          stack.pop();
          answer += 2;
        } else stack.push(temp);
        break;
      }
    }
  })

  return answer;
}

// b = 1    b = 5
// a[0][0]  a[0][4]
// a[1][0]  a[1][4]
// a[2][0]  a[2][4]
// a[3][0]  a[3][4]
// a[4][0]  a[4][4]

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
