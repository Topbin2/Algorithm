function solution(topping) {
  // const set = new Set(topping);
  // return set.size;

  let result = 0;
  for (let i = 0; i < topping.length; i++) {
    const firstSlice = topping.slice(0, i);
    const secondSlice = topping.slice(i);

    const firstTopping = new Set(topping.slice(0, i));
    const secondTopping = new Set(topping.slice(i));

    if (firstTopping.size === secondTopping.size) {
      result++;
    }
    // if (eqSet(firstTopping, secondTopping)) result++;
  }

  return result;
}

function eqSet(as, bs) {
  console.log(as, bs);
  if (as.size !== bs.size) return false;
  for (var a of as) if (!bs.has(a)) return false;
  return true;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); //2
console.log(solution([1, 2, 3, 1, 4])); //0
