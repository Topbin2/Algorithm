const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((num) => Number(num));

const K = input[0];
const nums = input.slice(1);

solution(K, nums)

function solution(K, nums) {

  const stack = [];

  for(let x of nums) {
    if(x === 0) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  console.log(stack.reduce((acc, cur) => acc + cur, 0)); 
}
