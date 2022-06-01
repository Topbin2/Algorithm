function solution(s){
  if(s.length % 2 === 1) return 'NO';

  const stack = [];

  for(let x of s) {
    if(x === '(') stack.push(x);
    else {
      if(stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  return 'YES';
}

let a="(())))";
console.log(solution(a));