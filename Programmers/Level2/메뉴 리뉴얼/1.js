function solution(orders, course) {
  const sortedArr = orders.map((el) => el.split("").sort());

  const stack = [];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (i === j) continue;
      if (sortedArr[j].every((el) => sortedArr[i].includes(el))) {
        if (!stack.includes(sortedArr[j].join(""))) stack.push(sortedArr[j].join(""));
      }
    }
  }

  return stack;
}
console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]
