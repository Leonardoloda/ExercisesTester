const isPalindrome = function(num) {
  const value = String(num);
  const lastIndex = value.length - 1;

  for (let i = lastIndex; i > 0; i--) {
    if (value.charAt(i) != value.charAt(lastIndex - i)) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;