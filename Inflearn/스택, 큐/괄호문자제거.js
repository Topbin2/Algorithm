// function solution(s){  
//   const stack = [];

//   for(let x of s) {

//     if(x === ')') {
//       while(stack[stack.length - 1] !== '(') {
//         stack.pop();
//       }
//       stack.pop();
//     } else {
//       stack.push(x);
//     }

//   }

//   return stack.join('');
// }

function solution(s){  

  const stack = [];
  let result = '';

  for(let x of s) {
    if(x === '(') stack.push(x);
    else if(x === ')') stack.pop();
    else if(stack.length === 0) result += x;
  }

  return result;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str)); // EFLM