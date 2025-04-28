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
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (root.value < node.value) {
      if (!root.right) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    } else {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    }
  }
  min(root) {
    if (!root.left) return root.value;
    else return this.min(root.left);
  }
  max(root) {
    if (!root.right) return root.value;
    else return this.max(root.right);
  }
  preOrder(root) {
    if (!root) {
      return null;
    } else {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (!root) {
      return null;
    } else {
      this.inOrder(root.left);
      console.group(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (!root) {
      return null;
    } else {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  sumOfAllNodes(root = this.root) {
    if (!root) {
      return 0;
    }
    let sum = 0;
    if (root) {
      sum += root.value;
    }
    sum += this.sumOfAllNodes(root.left);
    sum += this.sumOfAllNodes(root.right);

    return sum;
  }

  countOfAllNodes(root = this.root) {
    if (!root) {
      return 0;
    }
    let ct = 0;
    if (root) {
      ct++;
    }
    ct += this.countOfAllNodes(root.left);
    ct += this.countOfAllNodes(root.right);
    return ct;
  }

  sumOfLeafNodes(root = this.root) {
    if (!root) {
      return 0;
    }

    let sum = 0;
    if (!root.left && !root.right) {
      sum += root.value;
    }

    sum += this.sumOfLeafNodes(root.left);
    sum += this.sumOfLeafNodes(root.right);

    return sum;
  }
  countOfLeafNodes(root = this.root) {
    if (!root) {
      return 0;
    }

    let ct = 0;
    if (!root.left && !root.right) {
      ct++;
    }

    ct += this.countOfLeafNodes(root.left);
    ct += this.countOfLeafNodes(root.right);

    return ct;
  }

  countNodesWithTwoChild(root = this.root) {
    if (!root) return 0;

    let ct = 0;
    if (root.left && root.right) {
      ct++;
    }

    ct += this.countNodesWithTwoChild(root.left);
    ct += this.countNodesWithTwoChild(root.right);

    return ct;
  }

  countNodesWithOnlyRightChild(root = this.root) {
    if (!root) return 0;

    let ct = 0;

    if (root.right && !root.left) {
      ct++;
    }

    ct += this.countNodesWithOnlyRightChild(root.right);
    ct += this.countNodesWithOnlyRightChild(root.left);

    return ct;
  }

  countNodesWithOneChild(root = this.root) {
    if (!root) return 0;

    let ct = 0;

    if ((root.left && !root.right) || (!root.left && root.right)) {
      ct++;
    }

    ct += this.countNodesWithOneChild(root.left);
    ct += this.countNodesWithOneChild(root.right);

    return ct;
  }

  heightOfTree(root = this.root) {
    if (!root) {
      return -1;
    }

    return (
      Math.max(this.heightOfTree(root.left), this.heightOfTree(root.right)) + 1
    );
  }

  has(value, root = this.root) {
    if (!root) {
      return false;
    }

    if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this.has(value, root.left);
    } else {
      return this.has(value, root.right);
    }

  }
}

let bst = new BinarySearchTree();
bst.insert(2);
bst.insert(6);
bst.insert(25);
bst.insert(1);
bst.insert(5);
bst.insert(50);
console.log("max>>", bst.max(bst.root));
console.log("sum of all nodes>>", bst.sumOfAllNodes());
console.log("count of all nodes>>", bst.countOfAllNodes());
console.log("sum of all Leaf Nodes>>", bst.sumOfLeafNodes());
console.log("count of all Leaf Nodes>>", bst.countOfLeafNodes());
console.log("count of Nodes with 2 Child>>", bst.countNodesWithTwoChild());
console.log(
  "count of Nodes with only Right Child>>",
  bst.countNodesWithOnlyRightChild()
);
console.log(
  "count of Nodes with only One Child>>",
  bst.countNodesWithOneChild()
);
console.log("Heigt of tree>>", bst.heightOfTree());
console.log("does the tree had this value??>>", bst.has(3));
// bst.preOrder(bst.root)
// console.log("---")
// bst.inOrder(bst.root)
// console.log("---")
// bst.postOrder(bst.root)

bst.levelOrder();
