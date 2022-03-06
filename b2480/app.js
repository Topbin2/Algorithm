const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(Number);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
    if (A === B && A === C) {
        console.log(10000 + A * 1000);
    }
    
    if (A !== B || A !== C || B !== C) {
        if ( A === B || A === C ) {console.log(1000 + A * 100)}
        if ( B === C ) {console.log(1000 + B * 100)}
    }
    
    if ((A !== B) && (B !== C) && (C !== A)) {
        const sort = input.sort();
        console.log(sort.pop() * 100)
    }
}


