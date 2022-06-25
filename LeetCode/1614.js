function maxDepth(s) {
  // (1)+((2))+(((3)))

  // count = 1, max = 1
  // count = 0, max = 1
  // count = 1, max = 1
  // count = 2, max = 2
  // count = 1, max = 2
  // count = 0, max = 2
  // count = 1, max = 2
  // count = 2, max = 2
  // count = 3, max = 3
  // count = 2, max = 3
  // count = 1, max = 3
  // count = 0, max = 3

  // (1+(2*3)+((8)/4))+1

  // count = 1, max = 1
  // count = 2, max = 2
  // count = 1, max = 2
  // count = 2, max = 2
  // count = 3, max = 3
  // count = 2, max = 3
  // count = 1, max = 3
  // count = 0, max = 3

  let stackSize = 0;
  let maxDepth = 0;

  for (let x of s) {
    if (x === "(") {
      stackSize++;
      maxDepth = Math.max(stackSize, maxDepth);
    }
    if (x === ")") {
      stackSize--;
    }
  }

  return maxDepth;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
