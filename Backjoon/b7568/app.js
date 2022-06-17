let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)))
  .slice(1);

console.log(input);

let rank = 1;
const result = [];

for (let i = 0; i < input.length; i++) {
  rank = 1;
  for (let j = 0; j < input.length; j++) {
    if (i === j) continue;
    else {
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) rank++;
    }
  }
  result.push(rank);
}

console.log(result.join(" ").trim());
console.log(result.join(" ").trim());
console.log(result.join(" ").trim());

