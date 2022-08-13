function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.

  const result = [];

  function recursion (subset, start) {
    result.push(subset);

    for(let i = start; i < sideDishes.length; i++) {
      recursion([...subset, sideDishes[i]], i + 1);
    }
  }

  recursion([], 0);

  result.sort();

  return result;
}

let count = 1;

const arr = new Array(99).fill('1').map((el) => {
  count++;
  return el + count;
});

let output = missHouseMeal(arr);
console.log(output);