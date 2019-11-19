//基于数组的栈
//弊端：可以任意修改内部属性
export class arrayStack {
  constructor (){
    this.items = [];
  }
  //添加至栈顶（栈的末尾）
  push (element) {
    this.items.push(element);
  }
  //删除栈尾元素
  pop (){
    return this.items.pop();
  }
  //返回栈顶元素
  peek (){
    return this.items[this.items.length - 1];
  }
  //检查栈是否为空
  isEmpty () {
    return this.items.length === 0;
  }
  //清空栈
  clear () {
    this.items = [];
  }
  //栈size
  size () {
    return this.items.length
  }
}