const CountLetters = require("./CountLetters");

describe("Count the repetitions of each letter", () => {
  it("Should render the a json with 2 o's and 1 for each letter in Leonardo", () => {
    expect(CountLetters("Leonardo")).toStrictEqual({
      L: 1,
      e: 1,
      o: 2,
      n: 1,
      a: 1,
      r: 1,
      d: 1
    });
  });
});
