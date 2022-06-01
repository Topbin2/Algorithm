function reverse(str){
  
  if(str.length === 1) return str;

  return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') -> emosewa
 // reverse('wesome') -> emosew
  // reverse('esome') -> emose
    // reverse('some') -> emos
      // reverse('ome') -> emo
        // reverse('me') -> em
          // reverse('e') -> e

reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'