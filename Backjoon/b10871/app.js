const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [inputN, inputX] = input[0].split(' ').map(item => +item);  
const array = input[1].split(' ').map(item => +item);

solution(inputN, inputX, array);

function solution(N, X, arr) {
    const newArr = [];
    for( let i = 0; i < N; i++) {
        if(arr[i] < X) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
