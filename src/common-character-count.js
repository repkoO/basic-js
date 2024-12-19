const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const chars1 = s1.split('');
  const chars2 = s2.split('');

  const charCountMap = {};

  chars1.forEach(char => {
    if (charCountMap[char]) {
      charCountMap[char]++;
    } else {
      charCountMap[char] = 1;
    }
  });
  
  let commonCount = 0;
  chars2.forEach(char => {
    if (charCountMap[char]) {
      charCountMap[char]--;
      if (charCountMap[char] === 0) delete charCountMap[char];
      commonCount++;
    }
  });

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
