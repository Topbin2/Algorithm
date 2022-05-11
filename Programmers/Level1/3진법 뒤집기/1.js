function solution(n) {
  // const convertNum = n.toString(3).split('').reverse().join('');
  // return parseInt(convertNum, 3);

  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

console.log(solution(45));