function solution(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else {
    return solution(num - 1) + solution(num - 2);
  }
}

// solution(9) + solution(8)
  // solution(8) + solution(7)
    // solution(7) + solution(6)
      // solution(6) + solution(5)
        // solution(5) + solution(4)
          // solution(4) + solution(3)
            // solution(3) + solution(2)
              // solution(2) + solution(1)
                // solution(1) + solution(0)

console.log(solution(10));
