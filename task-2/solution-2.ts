/**
 * SOLUTION 2 - setting a Proxy with effect-free set/deleteProperty traps
 */

function createImmutableProxy(obj) {
  // return empty traps that return `false`, indicating the keys were not modified
  return new Proxy(obj, {
    set() {
      return false;
    },
    deleteProperty() {
      return false;
    },
  });
}
