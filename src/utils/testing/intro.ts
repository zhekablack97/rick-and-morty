function expect(value: any) {
  return {
    toBe: (exp: any) => {
      if (value === exp) {
        console.log("succes");
      } else {
        console.log(`Value is ${value} but expectation is ${exp}`);
      }
    },
  };
}

export const sum = (a: number, b: number) => a + b;

export const nativeNull = () => null;

//expect(sum(41, 1)).toBe(42)
