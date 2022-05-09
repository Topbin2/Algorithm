function solution(a, b) {
  if (a === b) return a;

  let answer = 0;
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12
