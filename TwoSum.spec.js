const TwoSum = require("./TwoSum");

describe("It solves the excersie", () => {
  const numbers = [2, 7, 11, 15];

  it("Should return a 0,1 when target is 9", () => {
    const target = 9;
    expect(TwoSum.TwoSum(numbers, target)).toBe("0,1");
  });

  it("Should return a 0,2 when target is 13", () => {
    const target = 13;
    expect(TwoSum.TwoSum(numbers, target)).toBe("0,2");
  });
});
