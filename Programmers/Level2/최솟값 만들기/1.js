function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let result = 0;
  for(let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }

  return result;
}

console.log(solution([1,4,2], [5,4,4])); // 29
console.log(solution([1,2], [3,4])); // 10