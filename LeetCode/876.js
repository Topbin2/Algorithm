let middleNode = function(head) {
  console.log(head)
  console.log(head.next)
  console.log(head.next.next)
  console.log(head.next.next.next)
  console.log(head.next.next.next.next)
  console.log(head.next.next.next.next.next)
  
  let count = 1;
  let temp = head;
  
  while(head.next) {
      head = head.next;
      count++;
  }
  
  console.log(count)
  
  console.log(temp)
  console.log(temp.next)
  console.log(temp.next.next)
  console.log(temp.next.next.next)
  console.log(temp.next.next.next.next)
  
  const middle = Math.floor(count / 2);
  for(let i = 0; i < middle; i++) {
      temp = temp.next;
  }
  
  return temp;

};

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]