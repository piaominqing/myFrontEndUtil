import {WeakMapStack} from './stack/weakMapStack';
import { Queue } from './queue/queue';

// stack 使用  十进制->任意进制
export function decimalToBinary(decNumber, base) {
  const remStack = new WeakMapStack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber,
    rem,
    baseString = '';
  if (!(base >= 2 && base <= 36)) {
    return '';
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // 根据String 对象的属性取值
  }

  return baseString;
}

//循环队列-击鼓传花游戏
//elementList 名单
//num 一次传花次数
export function hotPotato(elementList, num){
  const queue = new Queue();
  //淘汰名单
  const elimitatedList = [];
  //名单全部加到队列中
  for(let i = 0 ; i <elementList.length; i++){
    queue.enqueue(elementList[i]);
  }

  while(queue.size() >1){
    //循环队列模拟传花-移除的元素加到队列末尾
    for(let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue());
    }
    //淘汰元素加到淘汰名单里
    elimitatedList.push(queue.dequeue());
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }
}
