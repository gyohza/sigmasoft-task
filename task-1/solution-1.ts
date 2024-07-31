/**
 * SOLUTION 1 - spread NodeList into array
 */

interface NodeList {
  map: (...args: Parameters<Array<Node>["map"]>) => unknown[];
}

NodeList.prototype.map = function (...mapArgs) {
  // use spread operator to capture all .map arguments
  // since NodeList is iterable, it can be spread into an array
  const arr = [...this];

  // apply the args to the map() method from the array and return the newly produced array
  return arr.map(...mapArgs);
};
