const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // check for the incorrect data type
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // implement the code for each required case
    switch (arr[i]) {
      case "--discard-next":
        i += 2;
        break;
      case "--discard-prev":
        result.pop(arr[i]);
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          result = [...result, arr[i + 1]];
        }
        break;
      case "--double-prev":
        if (i > 0) {
          result = [...result, arr[i - 1]];
        }
        break;
      default:
        result = [...result, arr[i]];
        break;
    }
  }
  return result;
}

module.exports = {
  transform,
};
