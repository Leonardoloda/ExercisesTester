const isPalindrome = require('./Palindrome');

/**
 * @jest-environment node
 */
describe("Tries to identify whether a number is a palindrome", () => {
    it("Should return true on 12321", () => {
        expect(isPalindrome(12321)).toBe(true);
    });

    it("Should return a false on 123", () => {
        expect(isPalindrome(123)).toBe(false);
    });
})