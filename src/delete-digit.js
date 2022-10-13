const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // convert given number n into a string
  n = String(n);
  let result = [];
  // deleting 1 digit at a time per each cycle iteration, converting it to number(+) and finding the maximum result of given(Math.max)
  for (let i = 0; i < n.length; i++) {
    result[i] = +n.replace(n[i], "");
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit,
};
