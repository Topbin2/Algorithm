function solution(s){
    let answer;
    let min = Number.MIN_SAFE_INTEGER;

    for (let x of s) {
        if(x.length > min) {
            min = x.length;
            answer = x;
        }
    }
    return answer;
}
let str=["teacher", "timeasdasd", "student", "beautiful", "good"];
console.log(solution(str));