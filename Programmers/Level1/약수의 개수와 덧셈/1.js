function solution(left, right) {
 
  function countDivisor(num) {
    let count = 0
    for(let i = 1; i <= num; i++) {
      if(num % i === 0) count++;
    }
    return count;
  }

  let result = 0;

  for(let i = left; i <= right; i++) {
    countDivisor(i) % 2 ? result -= i : result += i;
  }

  return result;
}

console.log(solution(13, 17));
console.log(solution(24, 27));