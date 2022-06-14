// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     const newNode = new Node(val)
//     if(!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if(!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while(current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if(this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }

//   shift() {
//     if(!this.head) return undefined;
//     let currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     if(this.length === 0) {
//       this.tail = null;
//     }
//     return currentHead;
//   }

//   unshift(val) {
//     const newNode = new Node(val);
//     if(!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   get(index) {
//     if(index < 0 || index >= this.length) return null;
//     else {
//       let count = 0;
//       let result = this.head;
//       while(count !== index) {
//         result = result.next;
//         count++;
//       }
//       return result;
//     }
//   }

//   set(index, val) {
//     const foundNode = this.get(index);
//     if(foundNode) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//   }

//   insert(index, val) {
//     if(index < 0 || index > this.length) return false;
//     if(index === this.length) return !!this.push(val);
//     if(index === 0) return !!this.unshift(val);

//     const newNode = new Node(val);
//     const prev = this.get(index - 1);
//     const temp = prev.next;

//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }

//   remove(index) {
//     if(index < 0 || index >= this.length) return undefined;
//     if(index === 0) return this.shift();
//     if(index === this.length - 1) return this.pop();
//     const previousNode = this.get(index - 1);
//     const removed = previousNode.next;
//     previousNode.next = removed.next;
//     this.length--;
//     return removed;
//   }

//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;

//     let next;
//     let prev = null;

//     for(let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }

//     return this;
//   }

//   print() {
//     const arr = [];
//     let current = this.head;
//     while(current) {
//       arr.push(current.val)
//       current = current.next;
//     }
//     console.log(arr);
//   }
// }

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {

//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;

//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }

//     this.tail = newTail;
//     newTail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }

//   shift() {
//     if (!this.head) return undefined;
//     let currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return currentHead;
//   }

//   unshift(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   인덱스를 기준으로 접근할때는, 리스트보다는 배열을 사용하는 것이 좋음.

//   인자로 인덱스를 전달받음 (인덱스 범위에 따라 엣지 케이스)
//   인덱스가 음수이거나 리스트의 길이보다 같거나 크면 null
//   루프로 인덱스 만큼 반복해서 해당 위치의 인덱스에 있는 노드를 리턴 (counter 변수 사용)

//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     else {
//       let count = 0;
//       let currentNode = this.head;
//       while (count !== index) {
//         currentNode = currentNode.next;
//         count++;
//       }
//       return currentNode;
//     }
//   }

  
// }

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.next = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    
    let current = this.head;
    let newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;
    else {
      let count = 0;
      let currentNode = this.head;
      while(count !== index) {
        currentNode = currentNode.next;
        count++
      }
      return currentNode;
    }
  }
}

const list = new SinglyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);

list.print();

list.reverse();
