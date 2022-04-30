// function solution(arr) {
//   let result = 0;

//   if(arr.length === 0) return result;

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] !== arr[i + 1]) result++;

//   }
//   return result;
// }

// function solution(arr) {
//   let result = [];

//   for(let x of arr) {
//     if(!result.includes(x)) {
//       result.push(x)
//     };
//   }

//   return result.length;
// }

function solution(arr) {
  if(arr.length === 0) return 0;
  let i = 0;
  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(solution([1,1,1,1,1,2]));
console.log(solution([1,2,3,4,4,4,7,7,12,12,13,13]));
console.log(solution([]));
console.log(solution([-2,-1,-1,0,1]));
