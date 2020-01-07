import {defaultCompare, Compare} from '../nativeUtil';
import {Node} from './node';
// 二叉搜索树
// 只有俩个子节点，左边放小的
export class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null; // 第一个节点
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right === null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  // 中序遍历
  inOrderTraverse(callBack) {
    this.inOrderTraverseNode(this.root, callBack);
  }

  inOrderTraverseNode(node, callBack) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callBack);
      callBack(node.key);
      this.inOrderTraverseNode(node.right, callBack);
    }
  }

  // 先序遍历
  preOrderTraverse(callBack) {
    this.preOrderTraverseNode(this.root, callBack);
  }

  preOrderTraverseNode(node, callBack) {
    if (node !== null) {
      callBack(node.key);
      this.preOrderTraverseNode(node.left, callBack);
      this.preOrderTraverseNode(node.right, callBack);
    }
  }

  // 后序遍历
  postOrderTraverse(callBack) {
    this.postOrderTraverseNode(this.root, callBack);
  }

  postOrderTraverseNode(node, callBack) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callBack);
      this.postOrderTraverseNode(node.right, callBack);
      callBack(node.key);
    }
  }

  // 查询最小值
  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }

    return current;
  }

  // 查询最大值
  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }

    return current;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }

    return true;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    // node 为空
    if (node === null) {
      return null;
    }
    // 当key 值 比 当前node的key值小时 向 node.left 查找
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);

      return node;
    }
    // 当key 值 比 当前node的key值大时 向 node.right 查找
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);

      return node;
    }

    // 当找到key 值时
    // 找到key 值的node  且下面没有子节点时 赋予null
    if (node.left === null && node.right === null) {
      node = null;

      return node;
    }
    // 找到key 值的node  且left没有子节点时， 赋予右面的值
    if (node.left === null) {
      node = node.right;

      return node;
    }
    // 找到key 值的node  且right没有子节点时， 赋予左面的值
    if (node.right === null) {
      node = node.left;

      return node;
    }

    // 找到key 值的node  左侧右侧都有子节点时，赋予当前node的右面子节点中查找最小的node，且删除该最小的node
    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);

    return node;
  }
}
