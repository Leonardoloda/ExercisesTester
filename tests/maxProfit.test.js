const { expect } = require("chai");
const { maxProfit, maxProfitV2 } = require("../src/maxProfit");

describe("maxProfit", () => {
  it("should return 5 for  [7, 1, 5, 3, 6, 4]", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const output = maxProfit(prices);
    expect(output).to.equal(5);
  });

  it("should return 0 profit for [7, 6, 4, 3, 1]", () => {
    const prices = [7, 6, 4, 3, 1];
    const output = maxProfit(prices);
    expect(output).to.equal(0);
  });
});

describe("maxProfit v2", () => {
  it("should return 5 for  [7, 1, 5, 3, 6, 4]", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const output = maxProfitV2(prices);
    expect(output).to.equal(5);
  });

  it("should return 0 profit for [7, 6, 4, 3, 1]", () => {
    const prices = [7, 6, 4, 3, 1];
    const output = maxProfitV2(prices);
    expect(output).to.equal(0);
  });
});
