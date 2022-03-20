function solution(arr) {
  let answer = [];
  let sum = 0;

  for (let x of arr) {
    if (x % 2 === 1) {
      answer.push(x);
      sum += x;
    }
  }

  answer = Math.min(...answer);
  console.log(sum);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
