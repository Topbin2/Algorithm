function solution(arr1, arr2){
  const concatArr = [...arr1, ...arr2];
  concatArr.sort((a, b) => a - b);

  return concatArr;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b)); // [1,2,3,3,5,6,7,9]