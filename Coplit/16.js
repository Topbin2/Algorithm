function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.

  str = str.toLowerCase();

  let stack = '';

  for(let x of str) {
    if(!stack.includes(x)) stack += x;
    else return false;
  }

  return true;
}

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false