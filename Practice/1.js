function solution(arr) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    const sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-2, 0, 1, 3]));
console.log(solution([1, 2, 3]));
