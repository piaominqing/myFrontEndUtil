import {WeakMapStack} from './stack/weakMapStack';
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
