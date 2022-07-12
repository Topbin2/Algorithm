class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() { // 전위 순회
    const data = [];
    function traverse(node) {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() { // 후위 순회
    const data = [];
    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() { // 중위 순회
    const data = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      data.push(node);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
// 모든 노드를 한번씩 탐색하기 때문에 시간 복잡도는 모두 동일하다.
// 너비가 넓은 트리의 경우 깊이 우선 탐색이 공간복잡도가 더 유리하다.
// 트리의 깊이가 깊을수록 너비 우선 탐색이 더 유리하다.
  //         10
  //     6         15
  //   3   8     20

  // node = 10, data = [], queue = [10]
  // node = 10, data = [10], queue = [15]
  // node = 6, data = [10, 6], queue = [ 3, 8]
  // node = 15,  data = [10, 6, 15], queue = [8, 20]
  // node = 3, data = [10, 6, 15, 3] queue = [20]
  // node = 8, data = [10, 6, 15, 3, 8] queue = []
  // node = 20, data = [10, 6, 16, 3, 8, 20] queue=[]
