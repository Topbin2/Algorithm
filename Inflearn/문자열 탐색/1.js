function solution(s){
  answer = '';
  const str = s.toLowerCase();
  const newStr = str.split('').reverse().join('');
  console.log(str, newStr);
  if (str === newStr) {
    answer = 'YES';
  } else {
    answer = 'NO';
  }
  return answer;
}

let str="gooGa";
console.log(solution(str));

// function solution(s){
//   let answer = '';
//   s = s.toLowerCase();
//   len = s.length;
//   for(let i = 0; i < len / 2; i++) {
//     if(s[i] === s[len - i - 1]) {
//       return answer = 'YES';
//     } else {
//       return answer = 'NO';
//     }
//   }
// }

// let str="gooG";
// console.log(solution(str));