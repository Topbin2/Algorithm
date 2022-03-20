function solution(n){
    let answer;
    answer = Math.ceil(n / 12);
    return answer;
}

console.log(solution(25));

// function solution(n){
//     let answer;
//     if(n % 12 === 0) {
//         answer = n / 12;
//     }
//     if(n % 12 !== 0) {
//         answer = parseInt(n / 12) + 1;
//     }
//     return answer;
// }

// console.log(solution(24));