import {WeakMapStack} from './weakMapStack'

export function decimalToBinary(decNumber, base){
  const remStack = new WeakMapStack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber,
  rem,
  baseString = '';
  if(!(base >= 2 && base <= 36)){
    return '';
  }
  while (number > 0){
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()];
  }

  return baseString;
}