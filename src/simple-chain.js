const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  // add the required link to the chain
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // Check for the correct type of data for position
    if (
      typeof position !== "number" ||
      position > this.result.length ||
      position <= 0
    ) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
      // remove the required chain link
    } else {
      this.result.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    // simply reverse the chain
    this.result.reverse();
    return this;
  },
  finishChain() {
    // join the chain into required string with ~~ separator
    let chain = this.result.join("~~");
    this.result = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
