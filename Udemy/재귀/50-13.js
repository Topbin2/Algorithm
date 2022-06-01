function solution(num) {
  if(num === 1) return 1;

  return num + solution(num - 1);
}

// solution(6) -> 21
  // solution(5) -> 15
    // solution(4) -> 10
      // solution(3) -> 6
        // solution(2) -> 3
          // solution(1) -> 1
            // solution(0) -> 1





console.log(solution(6)); // 21
console.log(solution(10)); // 55