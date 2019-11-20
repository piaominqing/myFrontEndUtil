export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 向双端队列的后端添加元素
  addBack(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  // 向双端队列的前端添加元素
  addFront(element) {
    if (this.isImpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount -= 1;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i -= 1) {
        this.items[i] = this.items[i - 1];
      }
      this.count += 1;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  // 双端队列前端移除第一个元素
  removeFront() {
    if (this.isImpty()) {
      return null;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;

    return result;
  }

  // 双端队列后端移除第一个元素
  removeBack() {
    if (this.isImpty()) {
      return null;
    }
    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  // 取双端队列前端第一个元素
  peekFront() {
    if (this.isImpty()) {
      return null;
    }

    return this.items[this.lowestCount];
  }

  // 取双端队列后端第一个元素
  peekBack() {
    if (this.isImpty()) {
      return null;
    }

    return this.items[this.count - 1];
  }

  // 判断队列是否为空
  isImpty() {
    return this.count === 0;
  }

  // 获取队列长度
  size() {
    return this.count - this.lowestCount;
  }

  // 清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // toString
  toString() {
    if (this.isImpty()) {
      return null;
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i += 1) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}
