function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// function solution(arr){
//   let answer=[];
//   for(let x of arr){
//       let res=0;
//       while(x){
//           let t=x%10;
//           res=res*10+t;
//           x=parseInt(x/10);
//       }
//       if(isPrime(res)) answer.push(res);
//   }
//   return answer;
// }

// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     let res = x.toString().split("").reverse().join("");
//     res = Number(res);
//     if (isPrime(res)) answer.push(res);
//   }
//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

function solution(arr) {
  const result = [];

  const newArr = arr.map(num => Number(num.toString().split('').reverse().join('')));

  for(let x of newArr) {
    if(isPrime(x)) result.push(x);
  }

  return result;
}

function isPime(num) {
  if(num < 2) return false;

  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false;
  }

  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
