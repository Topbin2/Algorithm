// function solution(arr) {
//     let answer = 0;
//     let min = Number.MIN_SAFE_INTEGER;

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > min) {
//             answer++;
//             min = arr[i];
//         } else {
//             min = min;
//         }
//     }
//     return answer;
// }

// const arr = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(arr));

function solution(arr) {
    let answer = 0;
    let min = Number.MIN_SAFE_INTEGER;

    for(let x of arr) {
        if (x > min) {
            min = x;
            answer++;
        }
    }
    return answer;
}

const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));