const lengthOfLongestSubstring = function(s) {
  var letters = [];
  var longest = 0;

  if (s.length <= 1) return s.length;

  for (let i = 0; i < s.length; i++) {
    if (!letters.includes(s.charAt(i))) {
      letters.push(s.charAt(i));
    } else {
      letters = [];
    }
    if (letters.length > longest) longet = letters.length;
  }

  return longest;
};

module.exports = lengthOfLongestSubstring;
