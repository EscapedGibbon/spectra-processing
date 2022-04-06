import { NumberArray } from 'cheminfo-types';

import { xCheck } from './xCheck';
import { xGetFromToIndex, XGetFromToIndexOptions } from './xGetFromToIndex';
/**
 * Computes the index of the minimum of the given values
 *
 * @param array - array of numbers
 * @param options - allows to apply the algorithm on a part of the array
 * @returns - index
 */
export function xMinIndex(
  array: NumberArray,
  options: XGetFromToIndexOptions = {},
): number {
  xCheck(array);
  const { fromIndex, toIndex } = xGetFromToIndex(array, options);
  let minIndex = fromIndex;
  if (fromIndex === toIndex) {
    minIndex = 0;
  }
  for (let i = fromIndex + 1; i <= toIndex; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}
