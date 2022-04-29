function solution(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  let newArr = [];
  for (let x of arr1) {
    newArr.push(Math.pow(x, 2));
  }
  newArr.sort((a, b) => a - b);
  arr2.sort((a,b) => a - b);
  for(let i = 0; i < arr1.length; i++) {
    if(newArr[i] !== arr2[i]) return false;
  }
  return true;
}

// const arr1 = [1,2,3];
// const arr2 = [4,1,9];

// const arr1 = [1,2,3];
// const arr2 = [1,9];

const arr1 = [1,2,1];
const arr2 = [4,4,1];

console.log(solution(arr1, arr2))