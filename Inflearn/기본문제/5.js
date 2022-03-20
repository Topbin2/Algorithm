// function solution(arr){         
//     let answer;
//     let min = arr[0];

//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] < min) {
//             min = arr[i];
//         } 
//     }
//     answer = min;

//     return answer;
// }

// let arr=[51, 7, 11, 31, 12, 9, 11];
// console.log(solution(arr));

function solution(arr){         
    let answer = Math.min(...arr);
    return answer;
}

let arr=[51, 7, 11, 31, 12, 9, 11];
console.log(solution(arr));