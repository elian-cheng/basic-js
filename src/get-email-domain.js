const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //Slice the string from the index after the last @ and to the end:
  return email.slice(email.lastIndexOf("@") + 1);
}

module.exports = {
  getEmailDomain,
};
