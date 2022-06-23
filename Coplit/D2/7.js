function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.

  let result = {};

  for(let x of arr) {
    for(let i = 0; i < x.length - 1; i++) {
      if(!(x[i] in result)) {
        result[x[i]] = x[i + 1];
      }
    }
  }

  return result;
}

const arr = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', '1964'],
  ['make', 'Bill'],
];

let output = convertListToObject(arr);

console.log(output) 
// {
//   make : 'Ford'
//   model : 'Mustang',
//   year : '1964'
// }