// const maxSubarraySum = (arr, num) => {
//   if(arr.length === 0) return null;

//   let max = Number.MIN_SAFE_INTEGER;
//   let sum = 0;

//   for(let i = 0; i < arr.length - num + 1; i++) {
//     sum = 0;
//     for(let j = 0; j < num; j++) {
//       sum += arr[i + j];
//       if(sum > max) {
//         max = sum;
//       }
//     }
//   }
//   return max;
// };

function solution(arr, num) {
  if(arr.length === 0) return null;

  let maxSum = 0;
  let tempSum = Number.MIN_SAFE_INTEGER;

  for(let i = 0; i < num; i++) {
    maxSum += arr[i]; //4
  }
  tempSum = maxSum;
  for(let i = 0; i < arr.length - num; i++) {
    tempSum = tempSum - arr[i] + arr[i + num];
    maxSum = Math.max(maxSum, tempSum);
  }
  
  return maxSum;
}

console.log(solution([1,2,5,2,8,1,5], 2)); // 10 , 6번 반복 -> arr.length - num + 1
console.log(solution([1,2,5,2,8,1,5], 4)); // 17, 4번 반복
console.log(solution([4,2,1,6], 1)); // 6, 4번 반복
console.log(solution([4,2,1,6,2], 4)); // 13, 2번 반복
console.log(solution([], 4)); // null

