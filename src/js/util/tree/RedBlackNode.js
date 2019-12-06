import {Colors} from './RedBlackTree';
export class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.Red;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.Red;
  }
}
