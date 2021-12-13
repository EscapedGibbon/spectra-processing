/**
 * RayleighCdf.
 *
 * @param x - Number.
 * @param sigma - Number.
 * @returns Number.
 */
export default function rayleighCdf(x: number, sigma = 1): number {
  if (x < 0) {
    return 0;
  }
  return -Math.expm1(-Math.pow(x, 2) / (2 * Math.pow(sigma, 2)));
}