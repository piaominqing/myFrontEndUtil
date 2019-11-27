import {defaultToString} from '../nativeUtil';
import {LinkedList} from './linkedList';
import {ValuePair} from './valuePair';
// HashTableSeparateChaining
// 分离链接法 处理散列表冲突类
export class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // 散列函数
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i += 1) {
      hash += tableKey.charCodeAt(i);
    }

    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  // put
  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      if (this.table[position] === null) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));

      return true;
    }

    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList !== null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current !== null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }

    return null;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList !== null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current !== null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          this.deleteEmptyProperty(linkedList, position);

          return true;
        }
        current = current.next;
      }
    }

    return false;
  }

  deleteEmptyProperty(linkedList, position) {
    if (linkedList.isEmpty()) {
      delete this.table[position];
    }
  }
}
