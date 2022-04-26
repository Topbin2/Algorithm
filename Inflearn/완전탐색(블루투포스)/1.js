// function solution(n, arr){
//   let answer, max = Number.MIN_SAFE_INTEGER;
//   for(let x of arr) {
//     let sum = 0, tmp = x;
//     while(tmp) {
//       sum += tmp % 10; // 0 + 8 + 2 + 1
//       tmp = Math.floor(tmp / 10); // 12, 1, 0 
//     }
//     if(sum > max) { //sum = 11, max = 11
//       max = sum;
//       answer = x;
//     }
//     if(sum === max) {
//       if(x > answer) answer = x;
//     }
//   }
//   return answer;
// }

// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

function solution(n, arr){
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for(let x of arr) {
    let sum = 0;
    let num = x;
    while(num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if(sum > max) {
      answer = sum;
      max = sum;
    }
    if(sum === max) {
      if(answer < x) answer = x;
    }
  }

  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));