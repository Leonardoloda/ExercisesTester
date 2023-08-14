const { expect } = require("chai");
const { containsDuplicate } = require("../src/containsDuplicates");

describe("containsDuplicate", () => {
  it("should return true for Example 1", () => {
    const nums = [1, 2, 3, 1];
    const output = containsDuplicate(nums);
    expect(output).to.equal(true);
  });

  it("should return false for Example 2", () => {
    const nums = [1, 2, 3, 4];
    const output = containsDuplicate(nums);
    expect(output).to.equal(false);
  });

  it("should return true for Example 3", () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const output = containsDuplicate(nums);
    expect(output).to.equal(true);
  });
});
