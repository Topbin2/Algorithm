// 1 3 4   3 3    24
// 4 2 1   3 3

function solution(A, B) {
  let answer = [];

  for (let i = 0; i < A.length; i++) {
    // 행렬 A의 행 접근 - A
    const row = A[i];
    answer.push([]);
    // 행렬 B의 열 접근해서 곱하기 - B
    // 행렬 B의 열 길이
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      // 행렬 B의 행 길이
      // B는 열을 고정해놓고 행을 이동하기 - C
      for (let k = 0; k < B.length; k++) {
        sum += row[k] * B[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}