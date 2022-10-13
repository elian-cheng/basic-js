const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let team = [];
  members.forEach(member => {
    if (typeof member !== "string" || member == null) return;
    // Delete spaces:
    member = member.replace(/\s/g, "");
    // Create a team name from first letters of members' names
    team.push(member[0].toUpperCase());
  });
  // Sort the array and change it to the string
  return team.sort().join("");
}

module.exports = {
  createDreamTeam,
};
