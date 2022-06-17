// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");



let nums = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => parseInt(i));
  
  const sum = nums.reduce((a, b) => a + b, 0);
  let result;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if(sum === nums[i] + nums[j] + 100) {
        result = nums.filter((num) => num !== nums[i] && num !== nums[j]);
        break;
      }
    }

    if(result) break;
  }

  result.sort((a,b) => a - b);

  for(const x of result) {
     console.log(x);
  }

// let nums = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(i => parseInt(i));
// let arr;
// for (let i=0; i<8; i++) {
//     for (let j=i+1; j<9; j++) {
//         if (nums.reduce((sum, item) => sum + item, 0) === nums[i] + nums[j] + 100) {
//             arr = nums.filter(item => item !== nums[i] && item !== nums[j]);
//             break;
//         }
//     }
//     if (!!arr) break;
// }
// arr.sort((a, b) => a - b);
// for(let i=0; i<7; i++) console.log(arr[i]);

// solution(nums);
