function solution(s){
  let answer = '';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if(s.split('').reverse().join('') === s) {
    return answer = 'YES';
  } else return answer = 'NO';
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));