function solution(ingredient) {
  let result = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      console.log("i", i);
      result++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return result;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0

// [1,2,3,4,2,2,2,2,]
