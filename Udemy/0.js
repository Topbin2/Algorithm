function solution(arr) {
    let answer = [];
    for(let x of arr) {
        if(!answer.includes(x)){
            answer.push(x);
        }
    }
    return answer.length;
}

console.log(solution([-2,-1,-1,0,1]));