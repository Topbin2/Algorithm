function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // let result = 0;
  // for(let i = 0; i < A.length; i++) {
  //   result += A[i] * B[i];
  // }

  // return result;

  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

console.log(solution([1,4,2], [5,4,4])); // 29
console.log(solution([1,2], [3,4])); // 10