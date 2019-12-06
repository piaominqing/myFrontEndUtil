import {BinarySearchTree} from './binarySearchTree';
import {defaultCompare, Compare} from '../nativeUtil';
import {RedBlackNode} from './RedBlackNode';

export const Colors = {
  Red: 'Red',
  Black: 'Black'
};

export class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.Black;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;

        return node.left;
      }

      return this.insertNode(node.left, key);
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      if (node.right === null) {
        node.right = new RedBlackNode(key);
        node.right.parent = node;

        return node.right;
      }

      return this.insertNode(node.right, key);
    }

    return node;
  }

  fixTreeProperties(node) {
    while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.Black) {
      const parent = node.parent;
      const grandParent = parent.parent;
      // 情形A: 父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        if (uncle && uncle.color === Colors.Red) {
          grandParent.color = Colors.Red;
          parent.color = Colors.Black;
          uncle.color = Colors.Black;
          node = grandParent;
        } else {
          // 情形 2A：节点是右侧子节点-左旋转
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          } else {
            // 情形 3A: 节点是左侧子节点-右旋转
            this.rotationLL(grandParent);
            parent.color = Colors.Black;
            grandParent.color = Colors.Red;
            node = parent;
          }
        }
      } else {
        // 情形B：父节点是右侧子节点
        const uncle = grandParent.left;
        if (uncle && uncle.color === Colors.Red) {
          grandParent.color = Colors.Red;
          parent.color = Colors.Black;
          uncle.color = Colors.Black;
          node = grandParent;
        } else {
          // 情形2B：节点是左侧子节点-右旋转
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          } else {
            // 情形3B：节点是右侧子节点-左旋转
            this.rotationRR(grandParent);
            parent.color = Colors.Black;
            grandParent.color = Colors.Red;
            node = parent;
          }
        }
      }
    }
    this.root.color = Colors.Black;
  }

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
    tmp.right = node;
    node.parent = tmp;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
    tmp.left = node;
    node.parent = tmp;
  }
}
