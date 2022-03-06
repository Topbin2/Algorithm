const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const cookTime = input[0].split(' ').map(Number);

const hour = cookTime[0];
const minute = cookTime[1];
const cook = +input[1];

solution(hour, minute, cook);

function solution(A, B, C) {
    let resultHour = parseInt(((A * 60) + B + C) / 60);
    let resultMinute = (((A * 60) + B + C) % 60);
    
    if (resultHour < 24) {
        console.log(resultHour, resultMinute);
    }

    else if (resultHour >= 24) {
        console.log(resultHour - 24, resultMinute);
    }
}