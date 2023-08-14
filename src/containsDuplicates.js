/**
 * Checks if all the characters in a chain are unique
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const uniqueCharacters = new Set();

  for (let index = 0; index < nums.length; index += 1) {
    const num = nums[index];

    if (uniqueCharacters.has(num)) return true;

    uniqueCharacters.add(num);
  }

  return false;
};

module.exports = { containsDuplicate };
