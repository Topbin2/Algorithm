function solution(arr1, arr2){
  const result = [];

  for(let x of arr1) {
    for(let y of arr2) {
      if(x === y) {
        result.push(x);
        continue;
      };
    }
  }

  result.sort((a,b) => a - b);
  return result;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b)); // [2, 3, 5]