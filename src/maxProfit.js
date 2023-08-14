/**
 * Gets the max profit from buying on a day and selling on another
 * Option 1: O(n^2)
 * @param {Array<number>} prices
 * @returns {number} bestProfit
 */
const maxProfit = (prices) => {
  let bestProfit = 0;

  for (let index = 0; index < prices.length; index += 1) {
    const buyingPrice = prices[index];

    for (let jndex = index + 1; jndex < prices.length; jndex += 1) {
      const sellingPrice = prices[jndex];
      const expectedProfit = sellingPrice - buyingPrice;

      bestProfit = Math.max(bestProfit, expectedProfit);
    }
  }

  return bestProfit;
};

/**
 * Gets the max profit from buying on a day and selling on another
 * Option 2: O(n)
 * @param {Array<number>} prices
 * @returns {number} bestProfit
 */
const maxProfitV2 = (prices) => {
  let bestProfit = 0; // Stores the maximum profit detected
  let buyingDay = 0; // The day with the cheapest price
  let sellingDay = 1; // All the days where you can sale after buying

  while (sellingDay < prices.length) {
    // Iterate through all the days you can sell after buying
    const expectedProfit = prices[sellingDay] - prices[buyingDay]; // the profit expected by selling on this day

    if (expectedProfit > 0)
      // if by selling now we generate profit
      bestProfit = Math.max(bestProfit, expectedProfit);
    // Check if it's bigger than the last profit
    // If it's a loss  then we should try buying now and checking to sell in the future
    else buyingDay = sellingDay; // if it generate loses, it's cheaper to buy on this day

    sellingDay += 1; // keep checking upcoming days
  }

  return bestProfit;
};

module.exports = { maxProfit, maxProfitV2 };
