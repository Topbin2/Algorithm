function solution(arr, divisor) {
  // var answer = [];
  // for(let x of arr) {
  //   if(x % divisor === 0) answer.push(x);
  // }
  // if(!answer.length) return [-1];
  // answer.sort((a, b) => a - b);
  // return answer;

  let answer = arr.filter(num => num % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution([5,9,7,10], 5)); // [5,10]
console.log(solution([2,36,1,3], 1)); // [1,2,3,36]
console.log(solution([3,2,6], 10)); // -1