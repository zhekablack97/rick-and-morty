import { sum, nativeNull } from "./intro";

describe("sum", () => {
  test(" should return sum of to value", () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });

  test(" should return value corectly", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(10);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test(" should sum 2 float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Native null", () => {
  test("native null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});