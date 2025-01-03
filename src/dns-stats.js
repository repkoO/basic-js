const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  const newDomains = domains.map(domain => {
    let subdomain = ``;
    return domain.split(`.`).reverse().map(element => {
      subdomain += `.`;
      return subdomain += element;
    })
  })

  newDomains.forEach(domain => domain.forEach(subdomain => {
    result[subdomain] ? result[subdomain]++ : (result[subdomain] = 1)
    })
  )

  return result;
}

module.exports = {
  getDNSStats
};
