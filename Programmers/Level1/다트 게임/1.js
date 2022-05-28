function solution(dartResult) {

  let answer = [];
  let num = 0;

  for(let i = 0; i < dartResult.length; i++) {
    if(dartResult[i] >= 0 && dartResult[i] <= 9) {
      if(dartResult[i] == 1 && dartResult[i + 1] == 0) {
        num = 10;
        i++;
      } else {
        num = dartResult[i];
      }
    }

    if(dartResult[i] === 'S') {
      answer.push(num);
    }
    if(dartResult[i] === 'D') {
      answer.push(Math.pow(num, 2))
    }
    if(dartResult[i] === 'T') {
      answer.push(Math.pow(num, 3))
    }

    if(dartResult[i] === '*') {
      answer[answer.length - 2] *= 2;
      answer[answer.length - 1] *= 2;
    }

    if(dartResult[i] === '#') {
      answer[answer.length - 1] *= -1; 
    }
  }

  return answer.map(num => Number(num)).reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('1S2D*3T')); //37
console.log(solution('1D2S#10S')); //9
console.log(solution('1D2S0T')); //3