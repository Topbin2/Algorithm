// function solution(str){
//   const newStr = str.replace(/[^0-9]/g, '');
//   const result = parseInt(newStr);
//   return result;
// }

// let str="g0en2T0s8eSoft12";
// console.log(solution(str));

function solution(str){
  let answer = '';
  for(let x of str) {
   if(!isNaN(x)) {
     answer += x;
   }
  }
  return parseInt(answer);
}

let str="g0en2T0s8eSoft12";
console.log(solution(str));