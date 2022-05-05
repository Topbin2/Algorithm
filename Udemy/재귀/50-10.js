function solution(base, exponent) {
  if(exponent === 0) return 1;

  return base * solution(base, exponent - 1);
}

// solution(2, 4) -> 16
  // solution(2, 3) -> 8
    // solution(2, 2) -> 4
      // solution(2, 1) -> 2
        // solution(2, 0) -> 1


console.log(solution(2, 0)); // 1
console.log(solution(2, 2)); // 4
console.log(solution(2, 4)); // 16