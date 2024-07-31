/**
 * SOLUTION 2 - Pass NodeList to `Array.from()`
 */

interface NodeList {
  map: (...args: Parameters<Array<Node>['map']>) => unknown[];
}

NodeList.prototype.map = function (...mapArgs) {
  // use spread operator to capture all .map arguments
  // convert current NodeList instance to an array
  const arr = Array.from<Node>(this);

  // apply the args to the map() method from the array and return the newly produced array
  return arr.map(...mapArgs);
};
