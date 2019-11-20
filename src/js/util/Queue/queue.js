// 创建队列（为了获取元素更高效，采用对象来存储我们的元素）（先进先出）
// count 目前为止队列总元素数
// lowestCount 队列当前元素数
// items 存储元素
export class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 添加
  enqueue(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  // 移除
  dequeue() {
    if (this.isImpty()) {
      return null;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;

    return result;
  }

  // 判断队列是否为空
  isImpty() {
    return this.count === 0;
  }

  // 查看队列头元素
  peek() {
    if (this.isImpty()) {
      return null;
    }

    return this.items[this.lowestCount];
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
