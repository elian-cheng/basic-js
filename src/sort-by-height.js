const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // First create new array without -1 and sort it
  let sorted = arr.filter(x => x !== -1).sort((a, b) => a - b);
  // Replace each element of original array(which is not -1) with element from the sorted array
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] !== -1) arr[i] = sorted[j++];
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
