/*
 * === equals
 * @param {any} a The first value
 * @param {any} b The second value
 * @returns {boolean} The two value same flag
 */
// eslint-disable-next-line require-jsdoc
/**
 * === equals
 * @param {any} a The first value
 * @param {any} b The second value
 * @returns {boolean} The two value same flag
 */
export function defaultEquals(a, b) {
  return a === b;
}
/**
 * defaultToString
 * @param {any} item 需要toString的数据
 * @returns {string}
 */
export function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  }
  if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}
