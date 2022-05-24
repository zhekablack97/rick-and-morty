import { Loadash } from "./sync";

let _ = new Loadash();

describe("Loadash comact", () => {
  let array: any[];

  beforeEach(() => {
    array = [false, 42, 0, "", true, null, "hello"];
  });

  afterAll(() => {
    _ = new Loadash();
  });

  test("should be defind", () => {
    expect(_.compact).toBeDefined();
  });

  test("should remove falsy values from array", () => {
    const result = [42, true, "hello"];
    expect(_.compact(array)).toEqual(result);
  });

  test("should Not contain", () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(null);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain("");
  });
});

describe("Loadsh groubBy", () => {
  test("should be defind", () => {
    expect(_.compact).toBeDefined();
  });

  test("should group array items by match.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.5];

    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.5],
    };
    expect(_.groubBy(array, Math.floor)).toEqual(result);
  });

  test("should group array items by length", () => {
    const array = ["one", "two", "three"];

    const result = {
      3: ["one", "two"],
      5: ["three"],
    };
    expect(_.groubBy(array, "length")).toEqual(result);
  });

  test("should NOT return", () => {
    expect(_.groubBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
