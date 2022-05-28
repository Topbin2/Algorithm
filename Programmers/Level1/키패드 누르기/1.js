function solution(numbers, hand) {

  const keys = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  }

  let result = '';

  let leftHand = keys['*'];
  let rightHand = keys['#'];

  for(let i = 0; i < numbers.length; i++) {
    const target = numbers[i];

    if(target === 1 || target === 4 || target === 7) {
      result += 'L';
      leftHand = keys[target];
    } else if(target === 3 || target === 6 || target === 9) {
      result += 'R';
      rightHand = keys[target];
    } else {

      const leftDistance = getDistance(leftHand, keys[target]);
      const rightDistance = getDistance(rightHand, keys[target]);

      if(leftDistance > rightDistance) {
        result += 'R';
        rightHand = keys[target];
      } else if(leftDistance < rightDistance) {
        result += 'L';
        leftHand = keys[target];
      } else {
        if(hand === 'right') {
          result += 'R';
          rightHand = keys[target];
        } else {
          result += 'L';
          leftHand = keys[target];
        }
      }
    }
  }

  return result;
}

function getDistance(start, end) {
  let sum = Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
  return sum;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"
