/* eslint-disable no-unused-expressions */
const { expect } = require("chai");
const { twoSum, twoSumV2 } = require("../src/twoSum");

describe("Two Sum", () => {
  it("should return indices [0, 1] for input [2, 7, 11, 15] and target 9", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).to.deep.equal([0, 1]);
  });

  it("should return indices [1, 2] for input [3, 2, 4] and target 6", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).to.deep.equal([1, 2]);
  });

  it("should return indices [0, 1] for input [3, 3] and target 6", () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).to.deep.equal([0, 1]);
  });

  it("should return null for input [1, 2, 3, 4] and target 10", () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    const result = twoSum(nums, target);
    expect(result).to.be.null;
  });
});

describe("Two Sum v2", () => {
  it("should return indices [0, 1] for input [2, 7, 11, 15] and target 9", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSumV2(nums, target);
    expect(result).to.deep.equal([0, 1]);
  });

  it("should return indices [1, 2] for input [3, 2, 4] and target 6", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSumV2(nums, target);
    expect(result).to.deep.equal([1, 2]);
  });

  it("should return indices [0, 1] for input [3, 3] and target 6", () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSumV2(nums, target);
    expect(result).to.deep.equal([0, 1]);
  });

  it("should return null for input [1, 2, 3, 4] and target 10", () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    const result = twoSumV2(nums, target);
    expect(result).to.be.null;
  });
});
