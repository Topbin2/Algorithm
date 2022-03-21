// function solution(s){
//     let answer = '';
//     let index = Math.floor(s.length / 2);
//     if(s.length % 2 === 1) {
//         answer = s[index];
//     } else {
//         answer = s[index - 1] + s[index];
//     }
//     return answer;

// }
// console.log(solution("studyasdsf"));

function solution(s){
    let answer = '';
    let index = Math.floor(s.length / 2);
    if(s.length % 2 === 1) {
        answer = s.substr(index, 1);
    } else {
        answer = s.substr(index - 1, 2);
    }
    return answer;

}
console.log(solution("studyaff"));