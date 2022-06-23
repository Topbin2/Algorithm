function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.

  const list = 'abcdefghijklmnopqrstuvwxyz';

  let result = '';

  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ') {
      result += ' ';
      continue;
    }

    const secretIdx = list.split('').findIndex((el) => el === str[i]);

    if(secretIdx - secret < 0) {
      const idx = list.length - Math.abs(secretIdx - secret);
      result += list[idx];
      continue;
    }

    result += list[secretIdx - secret];
  }

  return result;
}

let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world

output = decryptCaesarCipher('khoor zruog', 3);
console.log(output); // --> world

output = decryptCaesarCipher('nzop delepd dfaazced jzf', 11);
console.log(output); // --> world