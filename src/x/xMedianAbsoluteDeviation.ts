import { DoubleArray } from 'cheminfo-types';

import { xSubtract } from '..';

import { xMedian } from './xMedian';

/**
 * This function calculates the median absolute deviation (MAD)
 * https://en.wikipedia.org/wiki/Median_absolute_deviation
 * @param array
 */
export function xMedianAbsoluteDeviation(array: DoubleArray): number {
  const median = xMedian(array);
  const averageDeviations = new Float64Array(array.length);
  for (let i = 0; i < array.length; i++) {
    averageDeviations[i] = Math.abs(array[i] - median);
  }
  return xMedian(averageDeviations);
}
