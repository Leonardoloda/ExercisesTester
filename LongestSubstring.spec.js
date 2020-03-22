const LongestSubstring = require("./LongestSubstring");

describe("it should show the longest substring withou repeating", () => {
/*   it("Should show a 3 for 'abcabcbb'", () => {
    expect(LongestSubstring("abcabcbb")).toBe(3);
  });

  it("Should show a 1 for 'bbbbb'", () => {
    expect(LongestSubstring("bbbbb")).toBe(1);
  });

  it("Should show a 3 for 'pwwkew'", () => {
    expect(LongestSubstring("pwwkew")).toBe(3);
  });

  it("Should show a 4 for 'cdeecdef'", () => {
    expect(LongestSubstring("cdeecdef")).toBe(4);
  });

  it("Should show a 1 for ' '", () => {
    expect(LongestSubstring(" ")).toBe(1);
  }); */

  it("Should show a 2 for 'au'", () => {
    expect(LongestSubstring("au")).toBe(2);
  });
});
