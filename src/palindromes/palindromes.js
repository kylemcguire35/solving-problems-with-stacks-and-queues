const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const middle = Math.floor(sentence.length / 2);

  const newStack = new Stack();

  for (let i = 0; i <= middle; i++) {
    newStack.push(sentence[i]);
  }

  for (
    sentence.length % 2 === 0 ? (i = middle) : (i = middle + 1);
    i > 0;
    i--
  ) {
    const popped = newStack.pop();
    if (popped !== sentence[i - 1]) return false;
  }

  return true;
};

module.exports = isPalindrome;
