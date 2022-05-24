import { Ajax } from "./async";

describe("Axax echo function", () => {
  test("should return value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });

  test("should return value with promice", async () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });

  test("should catch error with promice", async () => {
    try {
      await Ajax.echo();
    } catch (e: any) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e.message).toBe("error");
    }
  });
});
