function findBugInApples(arr) {
  // TODO: 여기에 코드를 작성합니다.

  let result = [];

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 'B') result.push(i, j);
    }
  }
  
  return result;
}

let output = findBugInApples([['A'], ['B']]);
console.log(output); //[1, 0]

output = findBugInApples([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]);
console.log(output); //[1, 1]