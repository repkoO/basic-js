const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //проверяем является ли аргумент строкой
  if (typeof sampleActivity !== 'string') { 
    return false 
  }
  //проверяем является аргумент на соответствие 
  const activ = Number.parseFloat(sampleActivity)
  if (isNaN(activ) || activ > MODERN_ACTIVITY || activ <= 0) { 
    return false 
  }
  //вычисления
  const kt = Math.log(2)
  const l = Math.log(activ / MODERN_ACTIVITY)
  return Math.ceil((l / -kt) * HALF_LIFE_PERIOD)
}

module.exports = {
  dateSample
};
