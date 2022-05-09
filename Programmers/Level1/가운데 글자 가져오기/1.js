function solution(s) {
  let index = Math.floor(s.length / 2);

  let answer = '';
  // if(s.length % 2 === 0) answer = s[index - 1] + s[index];
  // else answer = s[index];
  s.length % 2 ? answer = s[index] : answer = s[index - 1] + s[index];
  return answer;
}

console.log(solution('abcde'));
console.log(solution('qwer'));