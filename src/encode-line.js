const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // Convert the given string to the array
  let arr = [...str];
  let result = [];
  // The letter can appear at least 1 time
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    // if the 2 characters nearby are the same, increase the count
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      // for each repeated letter save the count and letter
      let letter = `${count}${arr[i]}`;
      result = [...result, letter];
      // reset the count for the next letter
      count = 1;
    }
  }
  // change array back to the string and replace the counts for non-repeating letters
  return result.join("").replace(/1/g, "");
}

module.exports = {
  encodeLine,
};
