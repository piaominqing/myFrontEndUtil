// 创建队列（为了获取元素更高效，采用对象来存储我们的元素）
// count 队列的大小
// lowestCount 追踪第一个元素
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
}
