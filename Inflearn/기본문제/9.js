// function solution(str){
//     let answer="";
//     for(let x of str) {
//         if(x !== 'A') {
//             answer += x;
//         } else {
//             answer += '#';
//         }

//     }
//     return answer;
// }

// let str="BANANA";
// console.log(solution(str));

function solution(str){
    const answer = str.replace(/A/g, '#');
    return answer;
}

let str="BANANA";
console.log(solution(str));