function drop(num, arr) {
  // TODO: 여기에 코드를 작성합니다.

  if(num >= arr.length) return [];

  if(num === 0) return arr;
  
  return drop(num - 1, arr.slice(1));
}

let output = drop(2, [1, -2, 1, 3]);
console.log(output); // --> [1, 3]

output = drop(5, [1, -2, 1, 3]);
console.log(output); // --> [ ]