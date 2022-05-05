function solution(num) {
  if(num <= 1) return 1;

  return num + solution(num - 1);
}

console.log(solution(6)); // 21
console.log(solution(10)); // 55