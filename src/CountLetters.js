const CountLetters = function(text) {
  const response = new Object();

  if (typeof text != "string") text = String(text);

  for (let i = 0; i < text.length; i++) {
    if (response[text.charAt(i)]) {
      response[text.charAt(i)] = response[text.charAt(i)] + 1;
    } else {
      response[text.charAt(i)] = 1;
    }
  }

  return response;
};

module.exports = CountLetters;
