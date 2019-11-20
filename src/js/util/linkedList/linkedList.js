import {defaultEquals} from '../nativeUtil';
import {Node} from './node';
// 链表数据结构
// equalsFn 可自定义equals
export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  // 向LinkedList对象尾部添加一个元素
  push(element) {
    const node = new Node(element);
    let current;

    if (this.head === null) {
      // 没有元素时 只需把push的元素 赋给head 即可
      this.head = node;
    } else {
      // 有元素时 在最后一个node的next上赋push的元素即可(注：我们只有第一个元素的引用)
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count += 1;
  }

  // 从特定位置移除一个元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        // 若删除第一个元素 只需head 指向下一个node即可
        this.head = current.next;
      } else {
        // 若删除其他元素 只需把index的前一个node的next设为index node的 next即可
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count -= 1;

      return current.element;
    }

    return null;
  }

  // 循环迭代链表直到目标位置
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i += 1) {
        node = node.next;
      }

      return node;
    }

    return null;
  }

  // 在任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head.next;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count += 1;

      return true;
    }

    return false;
  }

  // 返回一个元素的位置
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i += 1) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }

    return -1;
  }

  // 从链表中移除元素
  remove(element) {
    const index = this.indexOf(element);

    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head === null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.element;
    for (let i = 1; i < this.size() && current !== null; i += 1) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    return objString;
  }
}
