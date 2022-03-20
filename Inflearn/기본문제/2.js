// function solution(a, b, c){
//     let answer;
    
//     if(a > b && a > c && (b + c) > a) {
//         answer='Yes';
//     }
//     else if(b > a && b > c && (a + c) > b) {
//         answer='Yes';
//     }
//     else if(c > a && c > b && (a + b) > c) {
//         answer='Yes';
//     }
//     else {
//         answer='NO';
//     }
//     return answer;
// }

// console.log(solution(6, 7, 11));

// function solution(a, b, c){
//     let answer = 'YES';
//     let max;
//     let sum = a + b + c;
    
//     if(a > b) {
//         max = a;
//     } else {
//         max = b;
//     } 
//     if (c > max) {
//         max = c;
//     }

//     if((sum - max) <= max) {
//         answer = 'NO';
//     }
    
//     return answer;
// }

// console.log(solution(13, 33, 17));

function solution(a, b, c){
    let answer;
    
    if(a + b > c && a + c > b && b + c > a) {
        answer = 'YES';
    } else {
        answer = 'NO';
    }
    
    return answer;
}

console.log(solution(6, 7, 11));