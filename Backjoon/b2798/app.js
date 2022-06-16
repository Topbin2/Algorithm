const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input[0] = input[0].split(" ");
const cards = input[1].split(" ").map((element) => Number(element));
const N = Number(input[0][0]); // N은 총 카드의 개수
const M = Number(input[0][1]); // M은 3개의 숫자의 합과 가장 가까운 목표 값

function solution(cards, M) {
  const sumArr = [];
  for(let i = 0; i < cards.length - 2; i++) {
    for(let j = i + 1; j < cards.length - 1; j++) {
      for(let k = j + 1; k < cards.length; k++) {
        sumArr.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }

  sumArr.sort((a, b) => a - b);
  const filtered = sumArr.filter((num) => num <= M);

  console.log(filtered[filtered.length - 1]);
}

solution(cards, M);
