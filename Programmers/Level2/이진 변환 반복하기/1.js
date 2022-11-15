function solution(s) {

  let answer = [0,0]

  while(s !== '1') {
      s = s.split('');
      let temp = s.filter(v => v === '1').length;
      answer[0] ++;
      answer[1] += s.length - temp;
      s = temp.toString(2);
  }

  return answer;
}

console.log(solution("110010101001")); // [3, 8]
console.log(solution("01110")); // [3, 3]