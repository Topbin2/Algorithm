// function solution(arr, num) {
//   if(!arr.length) return false;

//   for(let i = 0; i < arr.length; i ++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       if((arr[i] + arr[j]) / 2 === num) return true;
//     }
//   }
//   return false;
// }


function solution(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while(start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if(avg === num) return true;
    else if(avg < num) start++;
    else end--;
  }

  return false;
}

console.log(solution([1,2,3], 2.5)); //true
console.log(solution([1,3,5,6,7,10,12,19], 8)); //true
console.log(solution([-1,0,3,4,5,6], 4.1)); //false
console.log(solution([], 4)); //false
