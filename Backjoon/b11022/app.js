const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const array = [];
for (let i = 1; i <= +input[0]; i++) {
    const value = input[i].split(' ').map(item => +item);
    array.push({A: value[0], B: value[1]});
}

solution(+input[0], array);

function solution(T, array) {
    for(let i = 0; i < T; i++) {
        const A = array[i].A;
        const B = array[i].B;
        console.log(`Case #${i + 1}: ${A} + ${B} = ${A + B}`)
    }
}