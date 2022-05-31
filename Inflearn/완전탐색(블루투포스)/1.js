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

// function solution(n, arr){
//   let answer;
//   let max = Number.MIN_SAFE_INTEGER;

//   for(let x of arr) {
//     let sum = x.toString().split('').reduce((a, b) => Number(a) + Number(b));
//     console.log(sum);
//     if(sum > max) {
//       answer = sum;
//       max = sum;
//     }
//     if(sum === max) {
//       if(answer < x) answer = x;
//     }
//   }

//   return answer;
// }

// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

function solution(arr){
  let convertSum = [];
  
  const sumArr = arr.map(num => num.toString());

  for(let i = 0; i < sumArr.length; i++) {
    let sum = 0;
    for(let j = 0; j < sumArr[i].length; j++) {
      sum += Number(sumArr[i][j]);
    }
    convertSum.push(sum);
  }

  const max = Math.max(...convertSum);

  const result = [];

  for(let i = 0; i < convertSum.length; i++) {
    if(max === convertSum[i]) result.push(i);
  }

  if(result.length === 1) return arr[result[0]];
  else {
    const answer = [];

    for(let i = 0; i < result.length; i++) {
      answer.push(arr[result[i]]);
    }

    return Math.max(...answer);
  }
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));