// 判断当前是否在一定时间段
/**
 * 判断当前时间是否在一定时间段
 * @returns {boolean} 判断当前时间是否在一定时间段
 */
export function isHour() {
  const now = new Date();
  const nowHour = now.getHours();
  if (nowHour >= 7 && nowHour < 17) {
    return true;
  }

  return false;
}
