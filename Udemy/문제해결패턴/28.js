function solution(str1, str2) {
  if(str1.length !== str2.length) return false;

  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  arr1.sort();
  arr2.sort();

  console.log(arr1);
  console.log(arr2);

  for(let i = 0; i < str1.length; i++) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// const str1 = 'aaz';
// const str2 = 'zza';

// const str1 = '';
// const str2 = '';

// const str1 = 'anagram';
// const str2 = 'nagaram';

// const str1 = 'rat';
// const str2 = 'car';

// const str1 = 'awesome';
// const str2 = 'awesom';

const str1 = 'qwerty';
const str2 = 'qeywrt';

console.log(solution(str1, str2));