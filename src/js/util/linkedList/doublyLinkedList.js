import {defaultEquals} from '../nativeUtil';
import {LinkedList} from './linkedList';
import {DoublyNode} from './doublynode';
// 双向链表
export class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    // 链表中最后一个node引用
    this.tail = null;
  }

  // 在任意位置插入新元素(不使用LinkedList的insert)
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        // 在链表中第一个位置插入一个新元素
        if (this.head === null) {
          // 新增的
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node; // 新增的
          this.head = node;
        }
      } else if (index === this.count) {
        // 新增的
        // 在链表中最后一个位置插入一个新元素
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        // 其他
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node; // 新增的
        node.prev = previous; // 新增的
      }
      this.count += 1;

      return true;
    }

    return false;
  }

  // 从任意位置移除元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count -= 1;

      return current.element;
    }

    return null;
  }
}
