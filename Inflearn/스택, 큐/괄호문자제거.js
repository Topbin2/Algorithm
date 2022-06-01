function solution(s){  
  const stack = [];

  for(let x of s) {

    if(x === ')') {
      while(stack[stack.length - 1] !== '(') {
        stack.pop();
      }
      stack.pop();
    } else {
      stack.push(x);
    }

  }

  return stack.join('');
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str)); // EFLM