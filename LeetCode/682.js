function solution(ops) {
  const stack = [];

  for (let i = 0; i < ops.length; i++) {

    const target = ops[i];

    if(target === '+') stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
    else if(target === 'D') stack.push(stack[stack.length - 1] * 2);
    else if(target === 'C') stack.pop();
    else stack.push(Number(target));
  }

  
  return stack.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(["5", "2", "C", "D", "+"])); // 30
console.log(solution(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(solution(["1", "C"])); // 0
