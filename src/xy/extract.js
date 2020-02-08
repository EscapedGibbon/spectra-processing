import { check } from './check';
import { normalizeZones } from '../util/normalizeZones';

/**
 * Extract zones from a XY data
 * @param {object} [points={}] - Object of points contains property x (an ordered increasing array) and y (an array)
 * @param {object} [options={}]
 * @param {Array} [options.zones=[]]
 * @return {Array} Array of points
 */

export function extract(points = {}, options = {}) {
  check(points);
  const { x, y } = points;
  let { zones } = options;

  zones = normalizeZones(zones);

  if (!Array.isArray(zones) || zones.length === 0) return points;

  let newX = [];
  let newY = [];

  let currentZone = zones[0];
  let position = 0;
  loop: for (let i = 0; i < x.length; i++) {
    while (currentZone.to < x[i]) {
      position++;
      currentZone = zones[position];
      if (!currentZone) {
        i = x.length;
        break loop;
      }
    }
    if (x[i] >= currentZone.from) {
      newX.push(x[i]);
      newY.push(y[i]);
    }
  }
  return { x: newX, y: newY };
}
