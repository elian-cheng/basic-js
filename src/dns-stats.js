const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  for (let i = 0; i < domains.length; i++) {
    // change initial array to the type ['com', 'epam], ['com', 'epam', 'info']
    let arr = domains[i].split(".").reverse();
    let key = "";
    arr.forEach(item => {
      // make each item of array look like:
      // .com, .com.epam, .com, .com.epam, .com.epam.info
      key = key + "." + item;
      // Count the occurences of each key:
      if (key in dns) {
        dns[key]++;
      } else {
        dns[key] = 1;
      }
    });
  }
  return dns;
}
getDNSStats(["epam.com", "info.epam.com"]);
module.exports = {
  getDNSStats,
};
