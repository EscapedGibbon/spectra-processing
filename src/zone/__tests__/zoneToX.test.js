import { zoneToX } from '../zoneToX.js';

describe('zoneToX', () => {
  it('test zoneToX', () => {
    let result = zoneToX({ from: 0, to: 10 }, 11);
    expect(Array.from(result)).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
