// function solution(str1, str2) {
//   if(str1.length !== str2.length) return false;

//   const arr1 = str1.split('').sort();
//   const arr2 = str2.split('').sort();

//   arr1.sort();
//   arr2.sort();

//   console.log(arr1);
//   console.log(arr2);

//   for(let i = 0; i < str1.length; i++) {
//     if(arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

function solution(str1, str2) {
  if(str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for(let x of str1) {
    obj1[x] = (obj1[x] || 0) + 1;
  }
  for(let x of str2) {
    obj2[x] = (obj2[x] || 0) + 1;
  }

  console.log(obj1)
  console.log(obj2)
  for(let key in obj1) {
    if(!(key in obj2)) return false;
    if(obj1[key] !== obj2[key]) return false;
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

const str1 = 'awesome';
const str2 = 'awesom';

// const str1 = 'qwerty';
// const str2 = 'qeywrt';

console.log(solution(str1, str2));