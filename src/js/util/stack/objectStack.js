// 基于JavaScript对象的栈（后进先出）
// 弊端：与数组相同，可任意修改属性
export class ObjectStack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  // 栈size
  size() {
    return this.count;
  }

  // 检查栈是否为空
  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return null;
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i += 1) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}
