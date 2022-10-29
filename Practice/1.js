function solution(num1, num2) {
  if(num1.length !== num2.length) return false;

  num1 = String(num1);
  num2 = String(num2);

  let obj1 = {};
  let obj2 = {};

  for(let i = 0; i < num1.length; i++) {
    obj1[num1[i]] = (obj1[num1[i]] || 0) + 1;
  }

  for(let i = 0; i < num2.length; i++) {
    obj2[num2[i]] = (obj2[num2[i]] || 0) + 1;
  }

  for(let key in obj1) {
    if(!(key in obj2)) return false;
    if(obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(solution(182,281));
console.log(solution(34,14));
console.log(solution(3589578,5879385));
console.log(solution(22,222));


