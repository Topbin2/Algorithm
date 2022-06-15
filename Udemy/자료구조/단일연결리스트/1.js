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

  set(index, val) {
    const foundNode = this.get(index);
    if(foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  // 인자로 index, val
  // 새로운 노드 생성
  // index 0보다 작거나, 길이보다 클 경우 false
  // index가 길이와 같을경우 push
  // index가 0 일 경우 unshift
  // get(index - 1) 이용하여 위치 찾기 -> 하나 전에 위치한 노드
  // 위에서 찾은 노드의 next가 새로운 노드를 가리키도록
  // 새로운 노드의 next로 이전의 next였던 노드를 연결
  // true or false 리턴
  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const prevNextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = prevNextNode;
    this.length++;
    return true;
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
