const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Checks for undefined and declaration of variables:
  const repeatTimes = options.repeatTimes ?? 1;
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  let addition = options.addition === undefined ? "" : String(options.addition);
  const additionSeparator = options.additionSeparator ?? "|";
  const separator = options.separator ?? "+";
  // Composing the sentence according to the task rules:
  if (additionRepeatTimes > 1) {
    addition =
      (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  }
  let result = str + addition;
  if (repeatTimes === 1) {
    return result;
  } else {
    result = (result + separator).repeat(repeatTimes - 1) + result;
    return result;
  }
}

module.exports = {
  repeater,
};
