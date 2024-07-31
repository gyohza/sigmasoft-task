/**
 * SOLUTION 1: using `Object.freeze()`
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */

function createImmutableObject<
  T extends Record<string | number | symbol, unknown>
>(obj: T): Readonly<T> {
  // creates a readonly version of the object
  return Object.freeze(obj);
}
