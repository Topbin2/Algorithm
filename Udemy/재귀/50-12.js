function solution(arr) {
  if(arr.length === 0) return 1;

  return arr[0] * solution(arr.slice(1));
}

// solution([1,2,3]) -> 6
  // solution([2,3]) -> 6
    // solution([3]) -> 3
      // solution([]) -> 1

console.log(solution([1,2,3])); // 6
console.log(solution([1,2,3,10])); // 60