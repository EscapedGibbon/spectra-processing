import { toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { matrixHistogram } from '../matrixHistogram';

expect.extend({ toMatchCloseTo });

describe('matrixHistogram', () => {
  it('simple case', () => {
    const matrix = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [2, 3, 4, 5, 6],
      [3, 4, 5, 6, 7],
    ];
    const histogram = matrixHistogram(matrix, { nbSlots: 10, centerX: false });
    histogram.y = Array.from(histogram.y);
    expect(histogram.x).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(histogram.y).toStrictEqual([1, 1, 2, 3, 3, 3, 3, 2, 1, 1]);
  });

  it('simple y log case', () => {
    const matrix = [
      [2, 1, 1, 1, 1],
      [3, 1, 1, 1, 1],
      [4, 6, 6, 6, 1],
    ];
    const histogram = matrixHistogram(matrix, {
      nbSlots: 6,
      logBaseY: 10,
      centerX: false,
    });
    histogram.y = Array.from(histogram.y);
    expect(histogram.x).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(histogram.y).toMatchCloseTo([
      1,
      0.3010299956639812,
      0.3010299956639812,
      0.3010299956639812,
      0,
      0.6020599913279624,
    ]);
  });
});
