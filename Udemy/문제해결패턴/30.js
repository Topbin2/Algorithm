function solution(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return false;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-2, 0, 1, 3]));
console.log(solution([1, 2, 3]));
