const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  // const [N, M] = input[0].split(" ");

  // const obj1 = {};
  // const result = [];
  // let count = 0;

  // for (let i = 1; i <= N; i++) {
  //   obj1[input[i]] = 1;
  // }

  // for (let i = M; i < input.length; i++) {
  //   for (let key in obj1) {
  //     if (key === input[i]) {
  //       result.push(key);
  //       count++;
  //     }
  //   }
  // }

  // result.sort();

  // console.log(count);

  // for (let x of result) {
  //   console.log(x);
  // }

  const [N, M] = input[0].split(" ").map((el) => Number(el));
  const set1 = new Set();
  const set2 = new Set();

  for (let i = 1; i <= N; i++) {
    set1.add(input[i]);
  }

  for (let i = N + 1; i < input.length; i++) {
    set2.add(input[i]);
  }

  const intersection = new Set([...set1].filter((x) => set2.has(x)));

  const result = [...intersection].sort();

  console.log(result.length);
  for (let x of result) {
    console.log(x);
  }
}

solution(input);
