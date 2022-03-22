function solution(arr){ 
    let length = arr.length;
    let answer = Array.from( {length}, ()=>1 );
    console.log(answer);
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            if(arr[i] < arr[j]) answer[i]++;
        }
    }
    return answer;
}
let arr=[87, 89, 92, 92, 92];
console.log(solution(arr));