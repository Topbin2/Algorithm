// function solution() {
//   let obj = {};
  
//   for(let x in arguments) {
//     obj[arguments[x]] = (obj[arguments[x]] || 0) + 1;
//   }

//   for(let key in obj) {
//     if(obj[key] > 1) return true;
//   }

//   return false;
// }

function solution() {
  // const set = new Set(arguments);
  // console.log(set.size);
  return new Set(arguments).size !== arguments.length;
}

console.log(solution(1, 2, 3));
console.log(solution(1, 2, 2));
console.log(solution('a', 'b', 'c', 'a'));
