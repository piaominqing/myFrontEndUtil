/* eslint-disable require-jsdoc */
import {WeakMapStack} from './stack/weakMapStack';
import {Queue} from './queue/queue';
import {Deque} from './queue/deque';
import {defaultCompare, Compare} from './nativeUtil';

/**
 * stack 使用  十进制->任意进制
 * @param {number} decNumber 十进制数
 * @param {number} base 任意进制
 * @returns {number} 转换完的值
 */
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

/**
 * 循环队列-击鼓传花游戏
 * @param {*} elementList 名单
 * @param {*} num 一次传花次数
 * @returns {object} 包含淘汰名单和胜利者的对象
 */
export function hotPotato(elementList, num) {
  const queue = new Queue();
  // 淘汰名单
  const elimitatedList = [];
  // 名单全部加到队列中
  for (let i = 0; i < elementList.length; i += 1) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    // 循环队列模拟传花-移除的元素加到队列末尾
    for (let i = 0; i < num; i += 1) {
      queue.enqueue(queue.dequeue());
    }
    // 淘汰元素加到淘汰名单里
    elimitatedList.push(queue.dequeue());
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  };
}

/**
 * 使用双端队列实现-回文（madam等）检查器
 * @param {string} aString 需要判断的字符串
 * @returns {boolean} 是否是回文
 */
// eslint-disable-next-line complexity
export function palindromeChecker(aString) {
  // undefined 和 null，'' 直接return false
  if (aString === null || (aString !== null && aString.length === 0)) {
    return false;
  }
  const deque = new Deque();
  // 去除空格转换为小写
  const lowerString = aString
    .toLocaleLowerCase()
    .split(' ')
    .join('');
  let isEqual = true;
  let firstChar, lastChar;
  // 把每个字符按顺序加到双端队列中
  for (let i = 0; i < lowerString.length; i += 1) {
    deque.addBack(lowerString.charAt(i));
  }
  // 循环deque至 size 为 1 或 0 且 之前都是相同
  // 每次取前后端一个字符判断是否相同
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}
/**
 * 阶乘
 * @param {number} n n
 * @returns {number}
 */
export function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

/**
 * 递归斐波那契
 * @param {number} n n
 * @returns {number}
 */
export function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

// /**
//  * 记忆化斐波那契
//  * @param {number} n n
//  * @returns {number}
//  */
// export function fibonacciMemoization(n) {
//   const memo = [0, 1];
//   const fibonacci = function(n) {
//     if (memo[n] !== null) {
//       return memo[n];
//     }

//     return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
//   };

//   return fibonacci;
// }

/**
 * 堆排序算法
 * @param {array} array array
 * @param {function} compareFn 比较函数
 * @returns {array} array
 */
export function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    heapSize = heapSize - 1;
    swap(array, 0, heapSize);
    heapify(array, 0, heapSize, compareFn);
  }

  return array;
}

export function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }

  return array;
}

export function heapify(array, index, size, compareFn) {
  let element = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < size && compareFn(array[element], array[left]) > Compare.BIGGER_THAN) {
    element = left;
  }
  if (right < size && compareFn(array[element], array[right]) > Compare.BIGGER_THAN) {
    element = right;
  }
  if (index !== element) {
    swap(array, index, element);
    heapify(element);
  }
}
