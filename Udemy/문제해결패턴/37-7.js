// function solution(arr, num) {
//   if(arr.length < num) return null;

//   let total = 0;
  
//   for(let i = 0; i < num; i++) {
//     total += arr[i];
//   }

//   let currentTotal = total;

//   for(let i = num; i < arr.length; i++) {
//     currentTotal = currentTotal + arr[i] - arr[i - num];
//     total = Math.max(total, currentTotal);
//   }

//   return total;
// }

function solution(arr, num) {
  if(arr.length < num) return null;
  let total = 0;
  for(let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;

  for(let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(solution([100,200,300,400], 2)); //700
console.log(solution([1,4,2,10,23,3,1,0,20], 4)); //39
console.log(solution([-3,4,0,-2,6,-1], 2)); //5
console.log(solution([3,-2,7,-4,1,-1,4,-2,1], 2)); //5
console.log(solution([2,3], 3)); //null

