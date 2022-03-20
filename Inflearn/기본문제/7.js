function solution(day, arr){
    let answer=0;
    for (let x of arr) {
        if(x % 10 === day) {
            answer++;
        }
    }
    return answer;
}

arr=[23, 23, 13, 47, 53, 17, 33];
console.log(solution(3, arr));


function solution(day, arr){
    const answer = arr.filter( item => (item % 10 === day));
    return answer.length;
}

arr=[23, 23, 13, 47, 53, 17, 33];
console.log(solution(3, arr));