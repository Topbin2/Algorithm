// function solution(s, t){
//     let answer = 0;
//     for(let x of s) {
//         if(x === t) {
//             answer++;
//         }
//     }
//     return answer;
// }

// let str="COMPUTERPROGRAMMING";
// console.log(solution(str, 'R'));

function solution(s, t){
    let arr = s.split('');
    const answer = arr.filter( item => item === t);
    return answer.length;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));