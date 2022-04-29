// function solution(arr1, arr2) {
//   if(arr1.length !== arr2.length) return false;
//   let newArr = [];
//   for (let x of arr1) {
//     newArr.push(Math.pow(x, 2));
//   }
//   newArr.sort((a, b) => a - b);
//   arr2.sort((a,b) => a - b);
//   for(let i = 0; i < arr1.length; i++) {
//     if(newArr[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// function solution(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

function solution(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for(let x of arr1) {
    obj1[x] = (obj1[x] || 0) + 1;
  }
  for(let x of arr2) {
    obj2[x] = (obj2[x] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);
  for(let key in obj1) {
    if(!(key ** 2 in obj2)) return false;
    if(obj1[key] !== obj2[key ** 2]) return false;
  }
  return true;
}

const arr1 = [1,3,3];
const arr2 = [1,1,9];

// const arr1 = [1,2,3];
// const arr2 = [1,9];

// const arr1 = [1, 2, 1, 3];
// const arr2 = [4, 1, 1, 9];

console.log(solution(arr1, arr2));
