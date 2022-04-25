function solution(s, t) {
  let answer = [];
  let p = s.length + 1;
  for (let x of s) {
    if(x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = s.length + 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if(s[i] === t) {
      p = 0;
      answer[i] = p;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

// function solution(s, t) {
//   let answer = [];
//   let p = s.length + 1;

//   for(let x of s) {
//     if(x === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }

//   p = s.length + 1;
//   for(let i = s.length - 1; i >= 0; i--) {
//     if(s[i] === t) {
//       p = 0;
//       answer[i] = p;
//     } else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }

//   return answer;
// }

// let str = "teachermode";
// console.log(solution(str, "e"));
