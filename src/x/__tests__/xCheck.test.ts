import { xCheck } from '../xCheck';

describe('test xcheck', () => {
  it('should throw on invalid value', () => {
    expect(() => xCheck()).toThrow(/input must be an array/);
    expect(() => xCheck([])).toThrow(/input must not be empty/);
  });
});
