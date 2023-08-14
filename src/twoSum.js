/**
 * Option 1: O(n^2)
 * @param {Array<number>} nums - An array of numbers.
 * @param {number} target - The target sum.
 * @returns {[number, number]} - An array containing the indices of the two numbers that add up to the target.
 */
const twoSum = (nums, target) => {
  let i = 0; // Initialize the outer loop index.

  // Iterate through each element of the array.
  while (i <= nums.length - 1) {
    let j = i + 1; // Initialize the inner loop index from the current position.

    // Iterate through the remaining elements in the array.
    while (j <= nums.length - 1) {
      // Check if the sum of the current pair of elements equals the target.
      if (nums[i] + nums[j] === target) {
        return [i, j]; // Return the indices of the two numbers.
      }

      j += 1; // Move to the next element in the inner loop.
    }

    i += 1; // Move to the next element in the outer loop.
  }

  return null; // Return null if no pair sums up to the target.
};

/**
 * Option 2: O(n)
 * @param {Array<number>} nums
 * @param {number} target
 * @returns {[number, number]}
 */
const twoSumV2 = (nums, target) => {
  const numbers = new Map();

  for (let index = 0; index < nums.length; index+= 1) {
    const element = nums[index];

    if (numbers.has(target - element))
      return [numbers.get(target - element), index];

    numbers.set(element, index);
  }

  return null;
};

module.exports = { twoSum, twoSumV2 };
