function solution(num) {
  if(num === 0) return 1;

  return num * solution(num - 1);
}

// solution(4) -> 24
  // solution(3) -> 6
    // solution(2) -> 2
      // solution(1) -> 1
        // solution(0) -> 1


console.log(solution(0)); // 1
console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(4)); // 24
console.log(solution(7)); // 5040