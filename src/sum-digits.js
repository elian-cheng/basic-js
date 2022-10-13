const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // create a numbers' digits array from the given number
  let arr = Array.from(String(n), Number);
  // summarize the digits of the number
  let result = arr.reduce((acc, value) => acc + value, 0);
  // if the result sum still has 2 digits, do the same iteration again and sum these digits too:
  if (String(result).length === 2) {
    result = Array.from(String(result), Number).reduce(
      (acc, value) => acc + value,
      0
    );
  }
  return result;
}

module.exports = {
  getSumOfDigits,
};
