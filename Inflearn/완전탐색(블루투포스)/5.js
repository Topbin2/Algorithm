function solution(arr) {

  const sumArr = [];

  for(let i = 0; i < arr.length - 2; i++) {
    for(let j = i + 1; j < arr.length - 1; j++) {
      for(let k = j + 1; k < arr.length; k++) {
        sumArr.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  sumArr.sort((a, b) => b - a);

  return sumArr[2];
}

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(arr)); // 143