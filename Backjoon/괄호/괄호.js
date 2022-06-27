const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = +input[0];
const arr = input.slice(1);


function solution(T, arr) {
  const result = [];

  for(let i = 0; i < arr.length - 1; i++) {
    const stack = [];
    for(let j = 0; j < arr[i].length; j++) {
      const target = arr[i][j];
      if(target === '(') {
        stack.push(target);
      }
      if(target === ')') {
        if(j === 0) {
          result.push('NO');
          break;
        }
        else if(stack.length === 0) {
          result.push('NO');
          break;
        }
        else {
          stack.pop();
        }
      }

      if(stack.length !== 0) result.push('NO');
      else result.push('YES');
    }
  }

  console.log(result);
}

solution(T, arr);