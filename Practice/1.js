// function solution(s) {
//   let answer = [];
//   let arr = s.split(' ');
//   for(let i = 0; i < arr.length; i++) {
//       answer.push(arr[i].split('').map((str, index) => index % 2 ? str : str.toUpperCase()).join(''))
//   }
//   console.log(answer);
//   return answer.join(' ');
// }

// function solution(s) {
//   return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
// }

function solution(s, n) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  const lower = 'abcdefghijklmnopqrstuvwxyz';

  let answer = '';
  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') {
      answer += ' ';
      continue;
    };

    const upperOrLower = upper.includes(s[i]) ? upper : lower;
    let index = upperOrLower.indexOf(s[i]) + n;

    if(index >= upperOrLower.length) index -= upperOrLower.length;

    answer += upperOrLower[index];
  }

  return answer;
}
console.log(solution("AB", 1)) // BC
console.log(solution("z", 1)) // a
console.log(solution("a b z", 4)) // e F d

