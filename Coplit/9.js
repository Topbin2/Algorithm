function ABCheck(str) {
  // code goes here
  str = str.toLowerCase();

  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'a' && str[i + 4] === 'b') return true;
    if(str[i] === 'b' && str[i + 4] === 'a') return true;
  }

  return false;
}

let output = ABCheck('lane Borrowed');
console.log(output); // --> true