const arr1 = [2, 3, 3, 1, 3];
const arr2 = [1, 1, 2, 2, 3];

function solution(arr1, arr2) {
  let winner = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      winner.push("D");
    } else if (arr1[i] === 1 && arr2[i] === 3) {
      winner.push("A");
    } else if (arr1[i] === 2 && arr2[i] === 1) {
      winner.push("A");
    } else if (arr1[i] === 3 && arr2[i] === 2) {
      winner.push("A");
    } else {
      winner.push("B");
    }
  }
  return winner.join(' ');
}

console.log(solution(arr1, arr2));
