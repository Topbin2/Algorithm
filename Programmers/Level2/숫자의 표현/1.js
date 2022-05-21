function solution(n) {

  let result = 0;

  for(let i = 1; i <= n; i++) {
    for(let j = i, sum = 0; j <= n; j++) {
      sum += j;

      if(sum === n) {
        result++;
      }

      if(sum > n) {
        break;
      }

    }
  }

  return result;
}

console.log(solution(15)); // 4