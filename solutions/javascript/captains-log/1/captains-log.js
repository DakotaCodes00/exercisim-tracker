// @ts-check

/**
 * @param {number} min
 * @param {number} max
 * @return {number} randomNumber
 */
function getRandomInRange(min, max){
  return Math.floor(min + Math.random() * (max - min));
}

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${getRandomInRange(1000,9999)}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return getRandomInRange(41000,42000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetClass = ['D','H','J','K','L','M','N','R','T','Y'];
  let index = getRandomInRange(0,10);
  return planetClass[index];
}

