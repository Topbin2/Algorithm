function solution(n) {
  let temp = n + 1;

  while (n) {
    if (convertToNum(n) === convertToNum(temp)) {
      return temp;
    }
    temp++;
  }
}

function convertToNum(num) {
  num = num.toString(2);

  let count = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "1") {
      count++;
    }
  }

  return count;
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
